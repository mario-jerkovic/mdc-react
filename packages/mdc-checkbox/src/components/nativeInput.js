import React from 'react';
import classnames from 'classnames';

import CheckboxMDC, {
  CheckboxMDCDefaultProps,
  CheckboxMDCPropTypes,
} from '../container';
import { BASE_CLASS_NAME } from '../constants';

class NativeControl extends React.PureComponent {

  static propTypes = CheckboxMDCPropTypes;

  static defaultProps = CheckboxMDCDefaultProps;

  static contextTypes = {
    adapter: React.PropTypes.object.isRequired,
  }

  render() {
    const {
      checked,
      indeterminate,
      disabled,
      onChange,
      ...other
    } = this.props;
    const {
      adapter,
    } = this.context;
    const className = classnames(
      `${BASE_CLASS_NAME}__native-control`,
      other.className,
    );
    return (
      <input
        {...other}
        type="checkbox"
        className={className}
        onChange={onChange}
        value={adapter.isChecked() || undefined}
      />
    )
  }
}

export default CheckboxMDC(NativeControl);
