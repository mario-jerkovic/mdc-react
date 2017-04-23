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

class HeaderContent extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      children,
      ...other
    } = this.props;
    const className = classnames(
      `${BASE_CLASS_NAME}__header-content`,
      other.className
    );
    return (
      <div
        {...other}
        className={className}
      >
        {children}
      </div>
    )
  }
}

export default HeaderContent;
