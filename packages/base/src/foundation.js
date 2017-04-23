class BaseFoundation {
  /**
   * MDCFoundation accepts only object as adapter
   * So we create object-proxy of instance.
   */
  toObject() {
    const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    const object = {};

    keys.forEach((key) => {
      object[key] = (...args) => this[key](...args);
    });

    return object;
  }
}

export default BaseFoundation;
