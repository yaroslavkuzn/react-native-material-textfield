import React, { PureComponent } from 'react';
import { Animated } from 'react-native';

import styles from './styles';

export default class Label extends PureComponent {
  static defaultProps = {
    numberOfLines: 1,
    disabled: false,
    restricted: false,
  };

  render() {
    let {
      label,
      offset,
      disabled,
      restricted,
      fontSize,
      activeFontSize,
      contentInset,
      errorColor,
      baseColor,
      tintColor,
      style,
      focusAnimation,
      labelAnimation,
      lineHeight,
      ...props
    } = this.props;

    if (null == label) {
      return null;
    }

    let color = disabled?
      baseColor:
      restricted?
        errorColor:
        focusAnimation.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [errorColor, baseColor, tintColor],
        });

    const labelLineHeight = lineHeight || fontSize;    
    let textStyle = {
      lineHeight: labelLineHeight,
      fontSize,
      color,
    };

    let { x0, y0, x1, y1 } = offset;

    y0 += activeFontSize;
    y0 += contentInset.label;
    y0 += labelLineHeight * 0.25;

    let containerStyle = {
      transform: [{
        scale: labelAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, activeFontSize / fontSize],
        }),
      }, {
        translateY: labelAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [y0, y1],
        }),
      }, {
        translateX: labelAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [x0, x1],
        }),
      }],
    };

    return (
      <Animated.View style={[styles.container, containerStyle]}>
        <Animated.Text style={[styles.text, style, textStyle]} {...props}>
          {label}
        </Animated.Text>
      </Animated.View>
    );
  }
}
