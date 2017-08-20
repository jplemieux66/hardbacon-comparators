import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class PromotionalOffersCell extends Component {
  constructor(props) {
    super(props);

    this.generateOfferText = this.generateOfferText.bind(this);
  }

  render () {
    const { name, offerDescription } = this.props;

    return (
      <td>
        <button type="button"
                className="btn btn-info offer-btn"
                data-toggle="modal"
                data-target="#promotional-offer-modal"
                data-offer-name={name}

                data-offer-text={this.generateOfferText()}>
          { offerDescription }
        </button>
      </td>
    );
  }

  generateOfferText = () => {
    const { language, name } = this.props;

    if (language == "fr") {
      return `We’ll send you an email right away with all the info you need to redeem the promotional offer from ${name}. 
      Before we do that, we need you to give us your name and email address below.`;
    } else {
      return `Nous vous enverrons un courriel avec toutes les informations dont vous avez besoin pour profiter de l’offre promotionnelle de ${name}. 
      Avant de faire cela, nous avons besoin de votre nom et de votre adresse courriel.`;
    }
  }
}

PromotionalOffersCell.propTypes = {
  offerDescription: PropTypes.string,
  name: PropTypes.string,
  language: PropTypes.string
}

export default PromotionalOffersCell;