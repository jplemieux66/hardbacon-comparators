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
    const { dataId, rowIndex, headerRow, entryObject, language, collapsible, collapsed } = this.props;

    return (
      <tbody>
        <tr className={collapsible ? `comparator-row${rowIndex} ${collapsed ? "collapse" : ""}` : ""}>
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
                           showLabelOnMobile={header.showLabelOnMobile}
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
    const { rowIndex, language } = this.props;

    if (this.props.isFirstOfMany) {
      return <MoreDetailsCell rowIndex={rowIndex} language={language} />
    }
  }
 }

ValueRow.defaultProps = {
  isFirstOfMany: false,
  collapsible: true,
  collapsed: true
}

ValueRow.propTypes = {
  dataId: PropTypes.number,
  headerRow: PropTypes.array,
  entryObject: PropTypes.object,
  isFirstOfMany: PropTypes.bool,
  rowIndex: PropTypes.number,
  language: PropTypes.string,
  collapsible: PropTypes.bool,
  collapsed: PropTypes.bool
}

export default ValueRow;