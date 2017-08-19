import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class PromotionalOffersCell extends Component {
  render () {
    const { name, offerDescription } = this.props;

    return (
      <td>
        <button type="button"
                className="btn btn-info"
                data-toggle="modal"
                onClick={`.promotional-offer-text').text('We’ll send you an email right away with all the info you need to redeem the promotional offer from ${name}. Before we do that, we need you to give us your name and email address below.'); $('#offer-name-input').attr('value', '${name}');`}>
          { offerDescription }
        </button>
      </td>
    );
  }
}

PromotionalOffersCell.propTypes = {
  offerDescription: PropTypes.string,
  name: PropTypes.string
}

export default PromotionalOffersCell;