import React, { Component } from 'react';
import Comparator from './../Comparator/Comparator';

class BrokeragesComparator extends Component {
  render() {
    console.log(this.props.data);

    return (
      <p>From the BrokeragesComparator</p>
    )
  }
}

export default BrokeragesComparator;