import React, { Component } from 'react';
import HeaderRow from './../HeaderRow/HeaderRow';
import ValueRow from './../ValueRow/ValueRow';

class Comparator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="comparator col-xs-12">
        <div className="comparator-border col-xs-12">
          <div className="text-center">
            <table id="robo-advisors-table" className="comparator-table col-lg-12 col-md-12 cold-sm-12 col-xs-12">
              {data.headers.map((headerRow, index) => (
                <HeaderRow headers={headerRow}
                           language={data.language} 
                           key={index} 
                           isFirstOfMany={ data.headers.length > 1 && index == 0 }/>
              ))}
              {data.entries.map((entry, entryIndex) => (
                data.headers.map((headerRow, headerRowIndex) => (
                  <ValueRow headerRow={headerRow}
                            entryObject={entry}
                            isFirstOfMany={ data.headers.length > 1 && headerRowIndex == 0 }
                            key={`${entryIndex}${headerRowIndex}`}
                            index={entryIndex}
                            language={data.language} />
                ))
              ))}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Comparator;