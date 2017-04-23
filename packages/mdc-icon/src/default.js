import React from 'react';

const propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
};

const defaultProps = {
  className: 'material-icons',
};

class Icon extends React.PureComponent {

  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;
    return (
      <i
        {...other}
        className={`${className}`}
      >
        {children}
      </i>
    );
  }
}

export default Icon;
