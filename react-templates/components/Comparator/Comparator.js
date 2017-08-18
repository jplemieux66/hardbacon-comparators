import React, { Component } from 'react';

class Comparator extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.data;
  }

  render() {
    console.log(this.state.headers);

    return (
      <p>Comparator Component</p>
    )
  }
}

export default Comparator;