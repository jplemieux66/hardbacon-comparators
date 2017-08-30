import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MoreDetailsCell = ({ rowIndex, language }) => {
  const lessDetails = language === "fr" ? "Moins de détails" : "Less details";
  const moreDetails = language === "en" ? "Plus de détails" : "More details";

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

MoreDetailsCell.propTypes = {
  rowIndex: PropTypes.number,
  label: PropTypes.string
}

export default MoreDetailsCell;