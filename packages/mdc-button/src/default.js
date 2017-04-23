import React from 'react';
import classnames from 'classnames';
import {
  Ripple
} from '@mdc-react/ripple';
import '@material/button/dist/mdc.button.css';

import {
  BASE_CLASS_NAME
} from './constants';

const CLASS_NAME = BASE_CLASS_NAME;
const propertyClassNames = {
  PREFIX: CLASS_NAME,
  DENSE: `${CLASS_NAME}--dense`,
  RAISED: `${CLASS_NAME}--raised`,
  COMPACT: `${CLASS_NAME}--compact`,
  PRIMARY: `${CLASS_NAME}--primary`,
  ACCENT: `${CLASS_NAME}--accent`,
};

export const propTypes = {
  dense: React.PropTypes.bool,
  raised: React.PropTypes.bool,
  compact: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  accent: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
  ]),
  onClick: React.PropTypes.func,
};

export const defaultProps = {
  dense: false,
  raised: false,
  compact: false,
  primary: false,
  accent: false,
  disabled: false,
  children: '',
  onClick: () => {}
};

class Button extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      dense,
      raised,
      compact,
      primary,
      accent,
      disabled,
      children,
      onClick,
      ...other,
    } = this.props;
    const className = classnames(
      CLASS_NAME,
      {
        [propertyClassNames.DENSE]: dense,
        [propertyClassNames.RAISED]: raised,
        [propertyClassNames.COMPACT]: compact,
        [propertyClassNames.PRIMARY]: primary,
        [propertyClassNames.ACCENT]: accent,
      },
      other.className
    );

    return (
      <Ripple unbounded={true}>
        <button
          {...other}
          className={className}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      </Ripple>
    );
  }
}

export default Button;
