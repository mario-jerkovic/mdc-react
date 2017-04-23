import React from 'react';
import classnames from 'classnames';
import '@material/toolbar/dist/mdc.toolbar.css';

import ToolbarRow from './toolbarRow';
import Section from './section';
import {
  BASE_CLASS_NAME
} from '../constants';

const CLASS_NAME = BASE_CLASS_NAME;
const propertyClassNames = {
  FIXED: `${CLASS_NAME}--fixed`,
}

const fieldType = React.PropTypes.shape({
  type: React.PropTypes.oneOf([ToolbarRow, Section])
})
const propTypes = {
  fixed: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(fieldType),
    fieldType,
  ])
}

const defaultProps = {
  fixed: false,
  children: undefined,
}

class Toolbar extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      fixed,
      children,
      ...other,
    } = this.props;
    const className = classnames(
      CLASS_NAME,
      {
        [propertyClassNames.FIXED]: fixed,
      },
      other.className,
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

export default Toolbar;
