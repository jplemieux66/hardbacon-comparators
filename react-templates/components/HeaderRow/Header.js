import React, { Component } from 'react';
import TooltipButton from './../TooltipButton/TooltipButton';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.generateTooltipButton = this.generateTooltipButton.bind(this);
  }

  render() {
    return (
      <th>
        {this.props.label}
        <br/>
        {this.generateTooltipButton()}
      </th>
    )
  }

  generateTooltipButton() {
    if (this.props.description != undefined) {
      return <TooltipButton content={this.props.description} isMobile={false}/>
    }
  }
}

Header.propTypes = {
  description: PropTypes.string,
  label: PropTypes.string
}

export default Header;