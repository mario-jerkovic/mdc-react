import React from 'react';
import ReactDOM from 'react-dom';
import {
  MDCCheckboxFoundation
} from '@material/checkbox/dist/mdc.checkbox';
import {
  NativeDOM
} from '@material-react/base';
import {
  Map as ImmutableMap,
  Set as ImmutableSet,
} from 'immutable';

import {
  CheckboxAdapter,
  CheckboxAdapterImpl,
} from './adapters';

import CheckboxFoundation from './foundation';

export const CheckboxMDCPropTypes = {
  checked: React.PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  indeterminate: React.PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  disabled: React.PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  onChange: React.PropTypes.func, // eslint-disable-line react/no-unused-prop-types
};

export const CheckboxMDCDefaultProps = {
  checked: false,
  indeterminate: false,
  disabled: false,
  onChange: () => {
  },
};

function Container(Component) {
  class CheckboxMDCDecorator extends React.PureComponent {

    static propTypes = CheckboxMDCPropTypes;

    static defaultProps = CheckboxMDCDefaultProps;

    static childContextTypes = {
      adapter: React.PropTypes.object,
    }

    constructor(props, context) {
      super(props, context);

      this.adapter = new CheckboxFoundation();
      this.foundation = new MDCCheckboxFoundation(this.adapter.toObject());
    }

    state = {
      foundationClasses: new ImmutableSet(),
      foundationCssVars: new ImmutableMap(),
      foundationEventListeners: new ImmutableMap(),
    }

    getChildContext() {
      return {
        adapter: this.adapter,
      };
    }

    componentDidMount() {
      this.adapter.setContainerAdapter(new CheckboxAdapterImpl(this));
      this.foundation.init();

      this.syncWithFoundation(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.syncWithFoundation(nextProps);
    }

    componentWillUnmount() {
      this.foundation.destroy();
      this.adapter.setContainerAdapter(new CheckboxAdapter());
    }

    getDOMNode = () => {
      return ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    }

    syncWithFoundation(props) {
      if (props.checked !== null && props.checked !== this.foundation.isChecked()) {
        this.foundation.setChecked(props.checked);
      }

      if (props.indeterminate !== null && props.indeterminate !== this.foundation.isIndeterminate()) {
        this.foundation.setIndeterminate(props.indeterminate);
      }

      if (props.disabled !== null && props.disabled !== this.foundation.isDisabled()) {
        this.foundation.setDisabled(props.disabled);
      }
    }

    render() {
      const cssVariables = {
        ...this.state.foundationCssVars.toJS(),
      };
      const cssClasses = [
        ...this.state.foundationClasses.toJS(),
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
          <Component
            {...this.props}
          />
        </NativeDOM>
      );
    }
  }

  return CheckboxMDCDecorator;
}

export default Container;
