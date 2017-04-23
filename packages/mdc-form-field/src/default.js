import React from 'react';
import classnames from 'classnames';
import '@material/form-field/dist/mdc.form-field.css';

import { BASE_CLASS_NAME } from './constants';

const propertyClassNames = {
  ALIGN_END: `${BASE_CLASS_NAME}--align-end`,
}

export const propTypes = {
  alignEnd: React.PropTypes.bool,
  children: React.PropTypes.node,
};

export const defaultProps = {
  alignEnd: false,
  children: undefined,
};

// TODO: Implement MDCFormFieldFoundation
// Check if one of the child is an instance of Ripple
// access this.foundation
class FormField extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      alignEnd,
      children,
      ...other,
    } = this.props;
    const className = classnames(
      BASE_CLASS_NAME,
      {
        [propertyClassNames.ALIGN_END]: alignEnd,
      },
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

export default FormField;
