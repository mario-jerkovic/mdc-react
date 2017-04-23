import React from 'react';
import {
  Ripple
} from '@material-react/ripple';
import '@material/checkbox/dist/mdc.checkbox.css';

import {
  Background,
  NativeInput,
} from './components';
import { BASE_CLASS_NAME } from './constants';
import {
  CheckboxMDCDefaultProps,
  CheckboxMDCPropTypes,
} from './container';

export const propTypes = {
  ...CheckboxMDCPropTypes,
}

export const defaultProps = {
  ...CheckboxMDCDefaultProps,
}

class Checkbox extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      checked,
      indeterminate,
      disabled,
      onChange,
      ...other
    } = this.props;
    return (
      <Ripple unbounded={true} >
        <div className={`${BASE_CLASS_NAME}`} >
          <NativeInput
            {...other}
            checked={checked}
            indeterminate={indeterminate}
            disabled={disabled}
            onChange={onChange}
          />
          <Background />
        </div>
      </Ripple>
    );
  }
}

export default Checkbox;
