import React, { Component } from 'react';
import HeaderRow from './../HeaderRow/HeaderRow';
import ValueRow from './../ValueRow/ValueRow';

class Comparator extends Component {
  constructor(props) {
    super(props);

    this.generateFirstRow = this.generateFirstRow.bind(this);
    this.generateAllOtherRows = this.generateAllOtherRows.bind(this);

  }

  render() {
    const { data } = this.props;

    return (
      <div className="comparator col-xs-12">
        <div className="comparator-border col-xs-12">
          <div className="text-center">
            <table id="robo-advisors-table" className="comparator-table col-lg-12 col-md-12 cold-sm-12 col-xs-12">
              { this.generateFirstRow() }
              { this.generateAllOtherRows() }
            </table>
          </div>
        </div>
      </div>
    )
  }

  generateFirstRow() {
    const { data } = this.props;

    return ([
      <HeaderRow headers={data.headers[0]} 
                 language={data.language} 
                 isFirstOfMany={ data.headers.length > 1 }
                 key="HeaderRow0-0"
                 rowIndex={0}
                 collapsible={false} />,
      <ValueRow headerRow={data.headers[0]}
                entryObject={data.entries[0]}
                isFirstOfMany={ data.headers.length > 1 }
                key="ValueRow0-0"
                rowIndex={0}
                language={data.language}
                collapsible={false} />,
      data.headers.filter((headerRow, index) => (index != 0)).map((headerRow, index) => ([
        <HeaderRow headers={headerRow} 
                   language={data.language} 
                   key={`HeaderRow0-${index}`} 
                   rowIndex={0} />,
        <ValueRow headerRow={headerRow}
                  entryObject={data.entries[0]}
                  key={`ValueRow0-${index}`}
                  rowIndex={0}
                  language={data.language} />
    ]))]);
  }

  generateAllOtherRows() {
    const { data } = this.props;

    return data.entries.filter((entry, entryIndex) => (entryIndex != 0)).map((entry, entryIndex) => (
      data.headers.map((headerRow, headerRowIndex) => ([
        <HeaderRow headers={headerRow} 
                   language={data.language} 
                   isFirstOfMany={ data.headers.length > 1 && headerRowIndex == 0 }
                   key={`HeaderRow${entryIndex}-${headerRowIndex}`} 
                   rowIndex={entryIndex + 1} />,
        <ValueRow headerRow={headerRow}
                  entryObject={entry}
                  isFirstOfMany={ data.headers.length > 1 && headerRowIndex == 0 }
                  key={`ValueRow${entryIndex}-${headerRowIndex}`}
                  rowIndex={entryIndex + 1}
                  language={data.language}
                  collapsible={headerRowIndex != 0} />
      ]))
    ))
  }
}

export default Comparator;