import React from 'react';
import classnames from 'classnames';

import {
  SECTION_BASE_CLASS_NAME
} from '../constants';

const propTypes = {
  align: React.PropTypes.oneOf([
    'start',
    'end',
  ]),
  children: React.PropTypes.node,
};

const defaultProps = {
  align: undefined,
  children: undefined,
}

class Section extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      align,
      children,
      ...other,
    } = this.props;
    const className = classnames(
      SECTION_BASE_CLASS_NAME,
      {
        [`${SECTION_BASE_CLASS_NAME}--align-${align}`]: align
      },
      other.className
    );
    return (
      <section
        {...other}
        className={className}
      >
        {children}
      </section>
    );
  }
}

export default Section;
