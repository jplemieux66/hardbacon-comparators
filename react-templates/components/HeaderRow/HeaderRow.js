import React, { Component } from 'react';
import TooltipButton from './../TooltipButton/TooltipButton';

class Header extends Component {
  constructor(props) {
    super(props);

    this.generateTooltipButton = this.generateTooltipButton.bind(this);
  }

  render() {
    return (
      <th>
        {this.props.header.label}
        <br/>
        {this.generateTooltipButton()}
      </th>
    )
  }

  generateTooltipButton() {
    if (this.props.header.description != undefined) {
      return <TooltipButton content={this.props.description} />
    }
  }
}

class HeaderRow extends Component {
  render() {
    return (
      <thead>
        <tr className="header-row">
          {this.props.headers.map((header, index) => (
            <Header header={header} key={index}/>
          ))}
        </tr>
      </thead>
    )
  }
}

export default HeaderRow;