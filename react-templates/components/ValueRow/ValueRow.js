import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import PromotionalOffersCell from './PromotionalOffersCell';
import MoreDetailsCell from './MoreDetailsCell.js';

class ValueRow extends Component {
  constructor(props) {
    super(props);

    this.generateMoreDetailsCell = this.generateMoreDetailsCell.bind(this);
  }

  render() {
    const { headerRow, entryObject, language } = this.props;

    return (
      <tbody>
        <tr>
          {headerRow.map((header, index) => {
              if (header.valueName == "promotionalOffers" && entryObject["promotionalOffers"]) 
              {
                 return <PromotionalOffersCell offerDescription={entryObject["promotionalOffers"]}
                                               name={entryObject.name}
                                               language={language}
                                               key={index} />
              }
              return <Cell value={entryObject[header.valueName]} 
                           label={header.label}
                           description={header.description}
                           valueName={header.valueName}
                           key={index} /> 
          })}
          {
            this.generateMoreDetailsCell()
          }
        </tr>
      </tbody>
    );
  }

  generateMoreDetailsCell() {
    const { index, language } = this.props;

    if (this.props.isFirstOfMany) {
      return <MoreDetailsCell index={index} language={language} />
    }
  }
 }

ValueRow.propTypes = {
  headerRow: PropTypes.array,
  entryObject: PropTypes.object,
  isFirstOfMany: PropTypes.bool,
  index: PropTypes.number,
  language: PropTypes.string
}

export default ValueRow;