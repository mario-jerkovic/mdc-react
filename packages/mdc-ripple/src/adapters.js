import {
  OrderedSet as ImmutableOrderedSet,
} from 'immutable';
import {
  getMatchesProperty,
  supportsCssVariables,
} from './util';

const MATCHES = getMatchesProperty(HTMLElement.prototype);

export class RippleAdapter {
  browserSupportsCssVars() {
    return false;
  }

  isUnbounded() {
    return false;
  }

  isSurfaceActive() {
    return false;
  }

  addClass() {
  }

  removeClass() {
  }

  registerInteractionHandler() {
  }

  deregisterInteractionHandler() {
  }

  registerResizeHandler() {
  }

  deregisterResizeHandler() {
  }

  updateCssVariable() {
  }

  computeBoundingRect() {
    return null;
  }

  getWindowPageOffset() {
    return { x: 0, y: 0 };
  }
}

export class RippleAdapterImpl extends RippleAdapter {

  constructor(element, options) {
    super();

    this.element = element;
    this.options = options;
  }

  browserSupportsCssVars() {
    return supportsCssVariables(window);
  }

  isUnbounded() {
    return this.options.unbounded || false;
  }

  isSurfaceActive() {
    return this.element.getDOMNode()[MATCHES](':active') || false;
  }

  addClass(className) {
    this.element.setState(state => ({
      foundationClasses: state.foundationClasses.add(className),
    }));
  }

  removeClass(className) {
    this.element.setState(state => ({
      foundationClasses: state.foundationClasses.remove(className),
    }));
  }

  registerInteractionHandler(eventType, handler) {
    this.element.setState(state => ({
      foundationEventListeners: state.foundationEventListeners.update(
        eventType,
        ImmutableOrderedSet(),
        x => x.add(handler),
      ),
    }));
  }

  deregisterInteractionHandler(eventType, handler) {
    this.element.setState(state => ({
      foundationEventListeners: state.foundationEventListeners.update(
        eventType,
        ImmutableOrderedSet(),
        x => x.delete(handler),
      ),
    }));
  }

  registerResizeHandler(handler) {
    window.addEventListener('resize', handler);
  }

  deregisterResizeHandler(handler) {
    window.removeEventListener('resize', handler);
  }

  updateCssVariable(varName, value) {
    if (value !== null) {
      this.element.setState(state => ({
        foundationCssVars: state.foundationCssVars.set(varName, value),
      }));
    } else {
      this.element.setState(state => ({
        foundationCssVars: state.foundationCssVars.delete(varName),
      }));
    }
  }

  computeBoundingRect() {
    return this.element.getDOMNode().getBoundingClientRect();
  }

  getWindowPageOffset() {
    return { x: window.pageXOffset, y: window.pageYOffset };
  }
}
