import React from 'react';
import {
  BASE_CLASS_NAME
} from '../constants';

class Background extends React.PureComponent {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div className={`${BASE_CLASS_NAME}__background`} >
        <svg
          className={`${BASE_CLASS_NAME}__checkmark`}
          viewBox="0 0 24 24"
        >
          <path
            className={`${BASE_CLASS_NAME}__checkmark__path`}
            fill="none"
            stroke="white"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
        <div className={`${BASE_CLASS_NAME}__mixedmark`} />
      </div>
    );
  }
}

export default Background;
