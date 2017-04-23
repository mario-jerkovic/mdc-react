/* eslint-disable react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  MDCTemporaryDrawerFoundation
} from '@material/drawer/dist/mdc.drawer';
import {
  NativeDOM
} from '@material-react/base';
import {
  Map as ImmutableMap,
  Set as ImmutableSet,
} from 'immutable';

import {
  TemporaryDrawerAdapter,
  TemporaryDrawerAdapterImpl,
  DrawerAdapter,
  DrawerAdapterImp
} from './adapters';
import TemporaryDrawerFoundation from './foundation';

const TemporaryMDCDrawerPropTypes = {
  open: React.PropTypes.bool,
  onOpenDrawer: React.PropTypes.func,
  onCloseDrawer: React.PropTypes.func,
};

const TemporaryMDCDrawerDefaultProps = {
  open: false,
  onOpenDrawer: () => {},
  onCloseDrawer: () => {}
};

export function TemporaryDrawerMDC(Component) {
  class TemporaryDrawerDecorator extends React.PureComponent {

    static propTypes = TemporaryMDCDrawerPropTypes;

    static defaultProps = TemporaryMDCDrawerDefaultProps;

    static childContextTypes = {
      adapter: React.PropTypes.object,
    }

    constructor(props, context) {
      super(props, context);

      this.adapter = new TemporaryDrawerFoundation();
      this.foundation = new MDCTemporaryDrawerFoundation(this.adapter.toObject());
    }

    state = {
      open: false,
      foundationClasses: new ImmutableSet(),
      foundationCssVars: new ImmutableMap(),
      foundationEventListeners: new ImmutableMap(),
    };

    getChildContext() {
      return {
        adapter: this.adapter,
      };
    }

    componentDidMount() {
      this.adapter.setTemporaryDrawerAdapter(new TemporaryDrawerAdapterImpl(this));
      this.foundation.init();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.state.open) {
        if (nextProps.open) {
          this.foundation.open();
        } else {
          this.foundation.close();
        }
      }
    }

    componentWillUnmount() {
      this.foundation.destroy();
      this.adapter.setTemporaryDrawerAdapter(new TemporaryDrawerAdapter());
    }

    getDOMNode = () => {
      return ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    }

    handleClick = () => {
      this.foundation.close();
    }

    render() {
      const {
        open,
        onOpenDrawer,
        onCloseDrawer,
        ...other,
      } = this.props;
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
            {...other}
            onClick={this.handleClick}
          />
        </NativeDOM>
      )
    }
  }

  return TemporaryDrawerDecorator;
}

const drawerPropsTypes = {
  onClick: React.PropTypes.func,
};

const drawerDefaultProps = {
  onClick: () => {}
};

const drawerContextTypes = {
  adapter: React.PropTypes.object.isRequired,
};

export function DrawerMDC(Component) {
  class DrawerDecorator extends React.PureComponent {

    static propTypes = drawerPropsTypes;

    static defaultProps = drawerDefaultProps;

    static contextTypes = drawerContextTypes

    state = {
      foundationCssVars: new ImmutableMap(),
      foundationEventListeners: new ImmutableMap(),
    };

    componentDidMount() {
      this.context.adapter.setDrawerAdapter(new DrawerAdapterImp(this));
    }

    componentWillUnmount() {
      this.context.adapter.setDrawerAdapter(new DrawerAdapter());
    }

    getDOMNode = () => {
      return ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    }

    handleClick = (event) => {
      event.stopPropagation();

      this.props.onClick();
    }

    render() {
      const {
        onClick,
        ...other
      } = this.props;
      const cssVariables = {
        ...this.state.foundationCssVars.toJS(),
      };
      const eventListeners = {
        ...this.state.foundationEventListeners.toJS(),
      };
      return (
        <NativeDOM
          cssVariables={cssVariables}
          eventListeners={eventListeners}
        >
          <Component
            {...other}
            onClick={this.handleClick}
          />
        </NativeDOM>
      )
    }
  }

  return DrawerDecorator;
}

