import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TooltipButton extends Component {
  render() {
    const { content, isMobile } = this.props;

    return (
      <button type="button" 
              className={`tooltip-category ${isMobile ? "mobile" : ""}`} 
              id="popout" 
              aria-hidden="true" 
              data-toggle="popover" 
              data-trigger="focus" 
              data-placement={isMobile ? "top" : "right"} 
              data-content={content}>
        <span className="glyphicon glyphicon-question-sign"></span>
      </button>
    )
  }
}

TooltipButton.propTypes = {
  content: PropTypes.string,
  isMobile: PropTypes.bool
}

export default TooltipButton;