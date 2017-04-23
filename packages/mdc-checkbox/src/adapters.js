import {
  getCorrectEventName
} from '@material/animation/dist/mdc.animation';
import {
  OrderedSet as ImmutableOrderedSet
} from 'immutable';

export class CheckboxAdapter {
  addClass() {
  }

  removeClass() {
  }

  registerAnimationEndHandler() {
  }

  deregisterAnimationEndHandler() {
  }

  registerChangeHandler() {
  }

  deregisterChangeHandler() {
  }

  getNativeControl() {
  }

  forceLayout() {
  }

  isAttachedToDOM() {
    return true;
  }

  isChecked() {
    return null;
  }
}

export class CheckboxAdapterImpl extends CheckboxAdapter {

  constructor(element) {
    super()

    this.element = element;
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

  registerAnimationEndHandler(handler) {
    this.element.setState(state => ({
      foundationEventListeners: state.foundationEventListeners.update(
        getCorrectEventName(window, 'animationend'),
        ImmutableOrderedSet(),
        x => x.add(handler),
      ),
    }));
  }

  deregisterAnimationEndHandler(handler) {
    const evt = getCorrectEventName(window, 'animationend');

    if (this.element.state.foundationEventListeners.get(evt).includes(handler)) {
      this.element.setState(state => ({
        foundationEventListeners: state.foundationEventListeners.delete(evt),
      }));
    }
  }

  registerChangeHandler(handler) {
    this.element.setState(state => ({
      foundationEventListeners: state.foundationEventListeners.update(
        'change',
        ImmutableOrderedSet(),
        x => x.add(handler),
      ),
    }));
  }

  deregisterChangeHandler(handler) {
    this.element.setState(state => ({
      foundationEventListeners: state.foundationEventListeners.update(
        'change',
        ImmutableOrderedSet(),
        x => x.delete(handler),
      ),
    }));
  }

  getNativeControl() {
    return this.element.getDOMNode();
  }

  forceLayout() {
    return this.getNativeControl().offsetWidth;
  }

  isChecked() {
    return this.element.props.checked || null
  }
}
