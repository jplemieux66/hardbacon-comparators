import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const PromotionalOffersCell = ({ name, offerDescription, language }) => {
  let offerText; 

  if (language == "fr") {
    offerText = `We’ll send you an email right away with all the info you need to redeem the promotional offer from ${name}. 
    Before we do that, we need you to give us your name and email address below.`;
  } else {
    offerText = `Nous vous enverrons un courriel avec toutes les informations dont vous avez besoin pour profiter de l’offre promotionnelle de ${name}. 
    Avant de faire cela, nous avons besoin de votre nom et de votre adresse courriel.`;
  }

  return (
    <td>
      <button type="button"
              className="btn btn-info offer-btn"
              data-toggle="modal"
              data-target="#promotional-offer-modal"
              data-language={language}
              data-offer-name={name}
              data-offer-text={offerText}>
        { offerDescription }
      </button>
    </td>
  );
}

PromotionalOffersCell.propTypes = {
  offerDescription: PropTypes.string,
  name: PropTypes.string,
  language: PropTypes.string
}

export default PromotionalOffersCell;