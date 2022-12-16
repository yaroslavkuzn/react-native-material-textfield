import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default class Counter extends PureComponent {
  render() {
    let {
      count,
      limit,
      baseColor,
      errorColor,
      style,
      counterExtraProps = {},
    } = this.props;

    if (!limit) {
      return null;
    }

    let textStyle = {
      color: count > limit ? errorColor : baseColor,
    };

    return (
      <Text {...counterExtraProps} style={[styles.text, style, textStyle]}>
        {count} / {limit}
      </Text>
    );
  }
}
