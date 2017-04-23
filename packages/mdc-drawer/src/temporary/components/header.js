import React from 'react';
import classnames from 'classnames';

import {
  BASE_CLASS_NAME
} from '../constants';

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {
  children: undefined,
};

class Header extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      children,
      ...other
    } = this.props;
    const className = classnames(
      `${BASE_CLASS_NAME}__header`,
      other.className
    );
    return (
      <header
        {...other}
        className={className}
      >
        {children}
      </header>
    );
  }
}

export default Header;
