import {
  BaseFoundation
} from '@mdc-react/base';
import {
  CheckboxAdapter
} from './adapters';

class CheckboxFoundation extends BaseFoundation {

  constructor() {
    super();

    this.containerAdapter = new CheckboxAdapter();
  }

  setContainerAdapter(containerAdapter) {
    this.containerAdapter = containerAdapter;
  }

  addClass(className) {
    this.containerAdapter.addClass(className);
  }

  removeClass(className) {
    this.containerAdapter.removeClass(className);
  }

  registerAnimationEndHandler(handler) {
    this.containerAdapter.registerAnimationEndHandler(handler);
  }

  deregisterAnimationEndHandler(handler) {
    this.containerAdapter.deregisterAnimationEndHandler(handler);
  }

  registerChangeHandler(handler) {
    this.containerAdapter.registerChangeHandler(handler);
  }

  deregisterChangeHandler(handler) {
    this.containerAdapter.deregisterChangeHandler(handler);
  }

  getNativeControl() {
    return this.containerAdapter.getNativeControl();
  }

  forceLayout() {
    this.containerAdapter.forceLayout();
  }

  isAttachedToDOM() {
    return this.containerAdapter.isAttachedToDOM();
  }

  isChecked() {
    return this.containerAdapter.isChecked();
  }
}

export default CheckboxFoundation;
