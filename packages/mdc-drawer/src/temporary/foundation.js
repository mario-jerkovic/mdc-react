import { BaseFoundation } from '@mdc-react/base';
import {
  TemporaryDrawerAdapter,
  DrawerAdapter,
} from './adapters';

class TemporaryDrawerFoundation extends BaseFoundation {

  constructor() {
    super();

    this.temporaryDrawerAdapter = new TemporaryDrawerAdapter();
    this.drawerAdapter = new DrawerAdapter();
  }

  setTemporaryDrawerAdapter(temporaryAdapter) {
    this.temporaryDrawerAdapter = temporaryAdapter;
  }

  setDrawerAdapter(drawerAdapter) {
    this.drawerAdapter = drawerAdapter;
  }

  addClass(className) {
    this.temporaryDrawerAdapter.addClass(className);
  }

  removeClass(className) {
    this.temporaryDrawerAdapter.removeClass(className);
  }

  hasClass(className) {
    return this.temporaryDrawerAdapter.hasClass(className);
  }

  registerInteractionHandler(event, handler) {
    this.temporaryDrawerAdapter.registerInteractionHandler(event, handler);
  }

  deregisterInteractionHandler(event, handler) {
    this.temporaryDrawerAdapter.deregisterInteractionHandler(event, handler);
  }

  registerDrawerInteractionHandler(event, handler) {
    this.drawerAdapter.registerDrawerInteractionHandler(event, handler);
  }

  deregisterDrawerInteractionHandler(event, handler) {
    this.drawerAdapter.deregisterDrawerInteractionHandler(event, handler);
  }

  registerTransitionEndHandler(handler) {
    this.temporaryDrawerAdapter.registerTransitionEndHandler(handler);
  }

  deregisterTransitionEndHandler(handler) {
    this.temporaryDrawerAdapter.deregisterTransitionEndHandler(handler);
  }

  registerDocumentKeydownHandler(handler) {
    this.temporaryDrawerAdapter.registerDocumentKeydownHandler(handler);
  }

  deregisterDocumentKeydownHandler(handler) {
    this.temporaryDrawerAdapter.deregisterDocumentKeydownHandler(handler);
  }

  updateCssVariable(value) {
    this.temporaryDrawerAdapter.updateCssVariable(value);
  }

  saveElementTabState(el) {
    this.temporaryDrawerAdapter.saveElementTabState(el);
  }

  restoreElementTabState(element) {
    this.temporaryDrawerAdapter.restoreElementTabState(element);
  }

  makeElementUntabbable(element) {
    this.temporaryDrawerAdapter.makeElementUntabbable(element);
  }

  isRtl() {
    return this.temporaryDrawerAdapter.isRtl();
  }

  getDrawerWidth() {
    return this.drawerAdapter.getDrawerWidth();
  }

  setTranslateX(value) {
    this.drawerAdapter.setTranslateX(value);
  }

  isDrawer(element) {
    return this.drawerAdapter.isDrawer(element);
  }

  getFocusableElements() {
    return this.drawerAdapter.getFocusableElements();
  }

  hasNecessaryDom() {
    return this.drawerAdapter.hasNecessaryDom();
  }
}

export default TemporaryDrawerFoundation;
