import React from 'react';
import classnames from 'classnames';

import {
  TITLE_BASE_CLASS_NAME
} from '../constants';

const propTypes = {
  children: React.PropTypes.string,
};

const defaultProps = {
  children: '',
};

class Title extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      children,
      ...other,
    } = this.props;
    const className = classnames(
      TITLE_BASE_CLASS_NAME,
      other.className
    );
    return (
      <span
        {...other}
        className={className}
      >
        {children}
      </span>
    );
  }
}

export default Title;
