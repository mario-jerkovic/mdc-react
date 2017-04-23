import React from 'react';
import classnames from 'classnames';

import {
  TOOLBAR_ROW_CLASS_NAME
} from '../constants';

const propTypes = {
  children: React.PropTypes.node.isRequired,
};

const defaultProps = {};

class toolbarRow extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      children,
      ...other,
    } = this.props;
    const className = classnames(
      TOOLBAR_ROW_CLASS_NAME,
      other.className,
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

export default toolbarRow;
