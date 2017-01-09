import React, { Component } from 'react';

const styles = {
  button: {
    border: '1px solid transparent',
    fontSize: '1rem',
    lineHeight: 1.25,
    padding: '.5rem 1rem',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    WebkitTransition: 'all 0.2s ease-in-out',
    OTransition: 'all 0.2s ease-in-out',
    transition: 'all 0.2s ease-in-out'
  }
}

export default class FormButton extends Component {
  constructor(props) {
    super(props);

    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    return Object.assign({}, styles.button, this.props.styles.button)
  }

  render() {
    return (
      <button type={this.props.type} style={this.getStyles()}>
        {this.props.text}
      </button>
    );
  }
}
