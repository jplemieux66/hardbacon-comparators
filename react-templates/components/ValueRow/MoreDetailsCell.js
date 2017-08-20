import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoreDetailsCell extends Component {
  render() {
    const { rowIndex, language } = this.props;

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
                id={`togglebtn${rowIndex}`}
                data-target={`.comparator-row${rowIndex}`}
                value={moreDetails}
                data-more-details={moreDetails}
                data-less-details={lessDetails}>
          <span className="glyphicon glyphicon-plus-sign"></span>
        </button>
      </td>
    );
  }
}

MoreDetailsCell.propTypes = {
  rowIndex: PropTypes.number,
  label: PropTypes.string
}

export default MoreDetailsCell;