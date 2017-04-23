import React from 'react';
import classname from 'classnames';

import {
  BASE_CLASS_NAME
} from '../constants';

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {
  children: undefined,
};
class DrawerContent extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      children,
      ...other
    } = this.props;
    const className = classname(
      `${BASE_CLASS_NAME}__content`,
      other.className,
    )
    return (
      <nav
        {...other}
        className={className}
      >
        {children}
      </nav>
    );
  }
}

export default DrawerContent;
