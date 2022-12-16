import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    limit: PropTypes.number,

    baseColor: PropTypes.string.isRequired,
    errorColor: PropTypes.string.isRequired,

    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    counterExtraProps: PropTypes.object,
  };

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
