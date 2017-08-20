import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipButton from './../TooltipButton/TooltipButton';

class Cell extends Component {
  constructor(props) {
    super(props);

    this.isImage = this.isImage.bind(this);
    this.generateCellContent = this.generateCellContent.bind(this);
  }

  render() {
    const { label, showLabelOnMobile } = this.props;

    return (
      <td data-label={showLabelOnMobile ? label : ""}>
        {this.generateTooltipButton()}
        {this.generateCellContent()}
      </td>
    )
  }

  generateTooltipButton() {
    const { description, valueName } = this.props;

    if (description && valueName != "promotionalOffers") {
      return <TooltipButton content={description} isMobile={true} />
    }
  }

  generateCellContent() {
    const { value } = this.props;

    if(this.isImage(value)) {
      return <img src={value} />
    } else if (Array.isArray(value)) {
      return (
        <div>
          {
            value.map((line, index) => ([
              line,
              <br key={index}></br>
            ]))
          }
        </div>
      )
    } else if (value) {
      return <p>{value}</p>
    }
  }

  isImage(value) {
    if ((typeof value) == "string") {
      var splitValue = value.split('.');
      var ext = splitValue[splitValue.length - 1];
      if(ext == 'png' || ext == 'gif' || ext == 'jpg' || ext == 'jpeg') {
        return true;
      }
    }
    return false;
  }
}

Cell.defaultProps = {
  showLabelOnMobile: true
}

Cell.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  description: PropTypes.string,
  valueName: PropTypes.string,
  showLabelOnMobile: PropTypes.bool
}

export default Cell;