import React from 'react';
import classnames from 'classnames';
import '@material/drawer/dist/mdc.drawer.css';

import {
BASE_CLASS_NAME
} from '../constants';
import { TemporaryDrawerMDC } from '../containers';

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {
  children: undefined
};

class Drawer extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      children,
      ...other,
    } = this.props;
    const className = classnames(
      BASE_CLASS_NAME,
      other.className,
    );
    return (
      <aside
        {...other}
        className={className}
      >
        {children}
      </aside>
    );
  }
}

export default TemporaryDrawerMDC(Drawer);
