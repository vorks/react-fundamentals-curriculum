import React, { Component } from 'react';

export default class FormLabel extends Component {
  constructor(props) {
    super(props);

    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    return this.props.screenReadersOnly
      ? {
        border: 0,
        clip: 'rect(0, 0, 0, 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: 1
      }
      : {
        marginBottom: '.5rem'
      }
  }

  render() {
    return (
      <label style={this.getStyles()}>
        {this.props.text}
      </label>
    );
  }
}
