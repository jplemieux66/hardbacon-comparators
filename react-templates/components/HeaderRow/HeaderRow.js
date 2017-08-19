import React, { Component } from 'react';
import Header from './Header'
import PropTypes from 'prop-types';

class HeaderRow extends Component {
  constructor(props) {
    super(props);

    this.generateMoreDetailsHeader = this.generateMoreDetailsHeader.bind(this);
  }

  render() {
    return (
      <thead>
        <tr className="header-row">
          {this.props.headers.map((header, index) => (
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

HeaderRow.propTypes = {
  headers: PropTypes.array,
  isFirstOfMany: PropTypes.bool,
  language: PropTypes.string
}

export default HeaderRow;