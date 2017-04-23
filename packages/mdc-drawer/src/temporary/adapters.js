import {
  cssClasses,
  strings,
} from '@material/drawer/temporary/constants';
import * as drawerUtil from '@material/drawer/util';
import {
  OrderedSet as ImmutableOrderedSet
} from 'immutable';

export class TemporaryDrawerAdapter {
  addClass() {
  }

  removeClass() {
  }

  hasClass() {
    return false;
  }

  registerInteractionHandler() {
  }

  deregisterInteractionHandler() {
  }

  registerTransitionEndHandler() {
  }

  deregisterTransitionEndHandler() {
  }

  registerDocumentKeydownHandler() {
  }

  deregisterDocumentKeydownHandler() {
  }

  updateCssVariable() {
  }

  saveElementTabState() {
  }

  restoreElementTabState() {
  }

  makeElementUntabbable() {
  }

  isRtl() {
    return false;
  }
}

export class DrawerAdapter {
  registerDrawerInteractionHandler() {
  }

  deregisterDrawerInteractionHandler() {
  }

  getDrawerWidth() {
    return 0;
  }

  setTranslateX() {
  }

  isDrawer() {
    return false;
  }

  getFocusableElements() {
    return [];
  }

  hasNecessaryDom() {
    return false;
  }
}

export class TemporaryDrawerAdapterImpl extends TemporaryDrawerAdapter {

  constructor(element) {
    super();

    this.element = element;
  }

  addClass(className) {
    this.element.setState(state => ({
      foundationClasses: state.foundationClasses.add(className),
    }), () => {
      if (className === cssClasses.OPEN) {
        this.element.props.onOpenDrawer();
      }
    });
  }

  removeClass(className) {
    this.element.setState(state => ({
      foundationClasses: state.foundationClasses.remove(className),
    }), () => {
      if (className === cssClasses.OPEN) {
        this.element.props.onCloseDrawer();
      }
    });
  }

  hasClass(className) {
    return (
      this.element.getDOMNode().classList.contains(className) ||
      this.element.state.foundationClasses.has(className)
    );
  }

  registerInteractionHandler(event, handler) {
    if (event === 'click') {
      return;
    }

    this.element.setState(state => ({
      foundationEventListeners: state.foundationEventListeners.update(
        drawerUtil.remapEvent(event, window),
        ImmutableOrderedSet(),
        x => x.add(handler),
      ),
    }));
  }

  deregisterInteractionHandler(event, handler) {
    if (event === 'click') {
      return;
    }

    this.element.setState(state => ({
      foundationEventListeners: state.foundationEventListeners.update(
        drawerUtil.remapEvent(event, window),
        ImmutableOrderedSet(),
        x => x.delete(handler),
      ),
    }));
  }

  registerTransitionEndHandler(handler) {
    const evt = 'transitionend';
    this.registerInteractionHandler(evt, handler);
  }

  deregisterTransitionEndHandler(handler) {
    const evt = 'transitionend';
    this.deregisterInteractionHandler(evt, handler);
  }

  registerDocumentKeydownHandler(handler) {
    document.addEventListener('keydown', handler);
  }

  deregisterDocumentKeydownHandler(handler) {
    document.removeEventListener('keydown', handler);
  }

  updateCssVariable(value) {
    this.element.setState(state => ({
      foundationCssVars: state.foundationCssVars.set(strings.OPACITY_VAR_NAME, value),
    }));
  }

  saveElementTabState(element) {
    drawerUtil.saveElementTabState(element);
  }

  restoreElementTabState(element) {
    drawerUtil.restoreElementTabState(element);
  }

  makeElementUntabbable(element) {
    element.setAttribute('tabindex', '-1');
  }

  isRtl() {
    // TODO: implement rtl prop
    // this.element.props.rtl ||
    return false;
  }
}

export class DrawerAdapterImp extends DrawerAdapter {

  constructor(element) {
    super();

    this.element = element;
  }

  registerDrawerInteractionHandler(event, handler) {
    if (event === 'click') {
      return;
    }

    this.element.setState(state => ({
      foundationEventListeners: state.foundationEventListeners.update(
        drawerUtil.remapEvent(event, window),
        ImmutableOrderedSet(),
        x => x.add(handler),
      ),
    }));
  }

  deregisterDrawerInteractionHandler(event, handler) {
    if (event === 'click') {
      return;
    }

    this.element.setState(state => ({
      foundationEventListeners: state.foundationEventListeners.update(
        drawerUtil.remapEvent(event, window),
        ImmutableOrderedSet(),
        x => x.delete(handler),
      ),
    }));
  }

  getDrawerWidth() {
    return this.element.getDOMNode().getBoundingClientRect().width;
  }

  setTranslateX(value) {
    if (value !== null) {
      this.element.setState(state => ({
        foundationCssVars: state
          .foundationCssVars
          .set(drawerUtil.getTransformPropertyName(), `translateX(${value}px)`),
      }));
    } else {
      this.element.setState(state => ({
        foundationCssVars: state.foundationCssVars.delete(drawerUtil.getTransformPropertyName()),
      }));
    }
  }

  isDrawer(element) {
    return this.element.getDOMNode() === element;
  }

  getFocusableElements() {
    return this.element.getDOMNode().querySelectorAll(strings.FOCUSABLE_ELEMENTS);
  }

  hasNecessaryDom() {
    return this.element.getDOMNode() !== null;
  }

}
