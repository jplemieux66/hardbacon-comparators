import React, { Component } from 'react';
import Header from './Header'
import PropTypes from 'prop-types';

class HeaderRow extends Component {
  constructor(props) {
    super(props);

    this.generateMoreDetailsHeader = this.generateMoreDetailsHeader.bind(this);
  }

  render() {
    const { headers, collapsed, collapsible, rowIndex } = this.props;

    return (
      <thead>
        <tr className={collapsible ? `header-row comparator-row${rowIndex} ${collapsed ? "collapse" : ""}` : "header-row"}>
          {headers.map((header, index) => (
            <Header label={header.label} 
                    description={header.description} 
                    key={index}/>
          ))}
          {
            this.generateMoreDetailsHeader()
          }
        </tr>
      </thead>
    )
  }

  generateMoreDetailsHeader() {
    const { isFirstOfMany, language } = this.props;
    
    if (isFirstOfMany) {
      let label;

      if (language == "fr") {
        label = "PLUS DE DÉTAILS"
      } else {
        label = "MORE DETAILS"
      }

      return <Header label={label} />
    }
  }
}

HeaderRow.defaultProps = {
  isFirstOfMany: false,
  collapsible: true,
  collapsed: true
}

HeaderRow.propTypes = {
  headers: PropTypes.array,
  isFirstOfMany: PropTypes.bool,
  language: PropTypes.string,
  collapsible: PropTypes.bool,
  collapsed: PropTypes.bool,
  rowIndex: PropTypes.number
}

export default HeaderRow;