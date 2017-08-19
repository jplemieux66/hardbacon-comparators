import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoreDetailsCell extends Component {
  render() {
    const { index, language } = this.props;

    let lessDetails;
    let moreDetails;
    if (language == "fr") {
      moreDetails = "Plus de détails";
      lessDetails = "Moins de détails";
    } else {
      moreDetails = "More details";
      lessDetails = "Less details";
    }

    return (
      <td data-label={moreDetails}>
        <button type="button"
                className="tooltip-category more-details-btn"
                aria-hidden="true"
                data-toggle="collapse"
                id={`togglebtn${index}`}
                data-target={`.comparator-row${index}`}
                value={moreDetails}
                data-more-details={moreDetails}
                data-less-details={lessDetails}>
          <span className="glyphicon glyphicon-plus-sign"
                onClick={`var button = $(this); if (button.attr("value") == ${moreDetails}) { button.attr("value", ${lessDetails}); button.find(".glyphicon").removeClass("glyphicon-plus-sign"); button.find(".glyphicon").addClass("glyphicon-minus-sign");} else {button.attr("value", "${moreDetails}");button.find(".glyphicon").removeClass("glyphicon-minus-sign");button.find(".glyphicon").addClass("glyphicon-plus-sign");}`}></span>
        </button>
      </td>
    );
  }
}

MoreDetailsCell.propTypes = {
  index: PropTypes.number,
  label: PropTypes.string
}

export default MoreDetailsCell;