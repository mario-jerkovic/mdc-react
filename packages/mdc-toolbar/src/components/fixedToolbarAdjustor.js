import React from 'react';
import classnames from 'classnames';

import {
  BASE_CLASS_NAME
} from '../constants';

const propTypes = {
  children: React.PropTypes.node,
}

const defaultProps = {
  children: undefined,
}

class FixedToolbarAdjustor extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      children,
      ...other,
    } = this.props;
    const className = classnames(`${BASE_CLASS_NAME}-fixed-adjust`);
    return (
      <div
        {...other}
        className={className}
      >
        {children}
      </div>
    );
  }
}

export default FixedToolbarAdjustor;
