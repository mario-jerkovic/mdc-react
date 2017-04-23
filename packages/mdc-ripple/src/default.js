import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import {
  MDCRippleFoundation,
} from '@material/ripple/dist/mdc.ripple';
import {
  NativeDOM
} from '@material-react/base';
import {
  Map as ImmutableMap,
  Set as ImmutableSet,
} from 'immutable';
import '@material/ripple/dist/mdc.ripple.css';

import {
  RippleAdapter,
  RippleAdapterImpl,
} from './adapters';
import RippleFoundation from './foundation';
import { BASE_CLASS_NAME } from './constants';

const CLASS_NAME = BASE_CLASS_NAME;
const propertyClassNames = {
  PREFIX: CLASS_NAME,
  PRIMARY: `${CLASS_NAME}--primary`,
  ACCENT: `${CLASS_NAME}--accent`,
}

const propTypes = {
  unbounded: React.PropTypes.bool,
  surfaceClassName: React.PropTypes.bool,
  accent: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
}
const defaultProps = {
  unbounded: false,
  surfaceClassName: false,
  accent: false,
  primary: false,
};

class Ripple extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  constructor(props, context) {
    super(props, context);

    this.adapter = new RippleFoundation();
    this.foundation = new MDCRippleFoundation(this.adapter.toObject());
  }

  state = {
    foundationClasses: new ImmutableSet(),
    foundationCssVars: new ImmutableMap(),
    foundationEventListeners: new ImmutableMap(),
  }

  componentDidMount() {
    this.adapter.setRippleAdapter(new RippleAdapterImpl(this, this.getOption(this.props)));
    this.foundation.init();
  }

  componentWillUnmount() {
    this.foundation.destroy();
    this.adapter.setRippleAdapter(new RippleAdapter());
  }

  getOption(props) {
    return {
      unbounded: props.unbounded,
      surfaceClassName: props.unbounded,
      accent: props.accent,
      primary: props.primary,
    }
  }

  getDOMNode = () => {
    return ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
  }

  render() {
    const className = classnames({
      [propertyClassNames.PREFIX]: this.props.surfaceClassName,
      [propertyClassNames.PRIMARY]: this.props.primary,
      [propertyClassNames.ACCENT]: this.props.accent,
    }).split(' ').filter(item => !!item);

    const cssVariables = {
      ...this.state.foundationCssVars.toJS(),
    };
    const cssClasses = [
      ...this.state.foundationClasses.toJS(),
      ...className
    ];
    const eventListeners = {
      ...this.state.foundationEventListeners.toJS(),
    };
    return (
      <NativeDOM
        cssVariables={cssVariables}
        cssClasses={cssClasses}
        eventListeners={eventListeners}
      >
        {React.cloneElement(this.props.children, {
          'data-mdc-ripple-is-unbounded': this.props.unbounded
        })}
      </NativeDOM>
    );
  }
}

export default Ripple;
