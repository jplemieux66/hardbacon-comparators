import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TooltipButton extends Component {
  render() {
    return (
      <button type="button" className="tooltip-category" id="popout" aria-hidden="true" data-toggle="popover" data-trigger="focus" data-placement="right" data-content={this.props.content}>
        <span className="glyphicon glyphicon-question-sign"></span>
      </button>
    )
  }
}

TooltipButton.propTypes = {
  content: PropTypes.string
}

export default TooltipButton;