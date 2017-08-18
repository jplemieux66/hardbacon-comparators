import React, { Component } from 'react';
import HeaderRow from './../HeaderRow/HeaderRow';

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
                <HeaderRow headers={headerRow} key={index} isFirstOfMany={data.headers.count > 1 && index == 0}/>
              ))}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Comparator;