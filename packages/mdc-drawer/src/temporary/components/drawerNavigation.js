import React from 'react';
import classnames from 'classnames';

import {
  BASE_CLASS_NAME,
} from '../constants';
import {
  DrawerMDC
} from '../containers';

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {
  children: undefined,
};

class DrawerNavigation extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      children,
      ...other
    } = this.props;
    const className = classnames(
      `${BASE_CLASS_NAME}__drawer`,
      other.className
    );
    return (
      <nav
        {...other}
        className={className}
      >
        {children}
      </nav>
    )
  }
}

export default DrawerMDC(DrawerNavigation);
