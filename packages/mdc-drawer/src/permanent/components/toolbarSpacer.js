import React from 'react';
import classnames from 'classnames';

import {
  BASE_CLASS_NAME
} from '../constants';

class toolbarSpacer extends React.PureComponent {

  static propTypes = {};

  static defaultProps = {};


  render() {
    const {
      ...other
    } = this.props;
    const className = classnames(
      `${BASE_CLASS_NAME}__toolbar-spacer`,
      other.className,
    );
    return (
      <div
        {...other}
        className={className}
      />
    );
  }
}

export default toolbarSpacer;
