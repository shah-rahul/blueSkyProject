import React, { Component } from 'react';
import { Chart } from 'react-charts';
import Data from '../../data.json';
class Graph extends Component {
  state = {
    axes: [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    list: [],
  };
  // initilises the graph data then further used to change it as per selection on 2nd and third index
  initData(country, gases, range1, range2) {
    let finalList = [];

    country.forEach((c) => {
      let list = [];
      console.log(c);
      Data.forEach((item) => {
        if (item.location == c && item.category == gases) {
          list.push([item.year, item.value]);
        }
        let newList = list.filter(
          (ele) => ele[0] >= range1 && ele[0] <= range2
        );
        list = newList;
      });
      finalList = [...finalList, { data: list }];
    });

    console.log(finalList);

    this.setState({
      list: finalList,
    });
  }

  changeUrl = (gases, range1, range2, country) => {
    window.history.replaceState(
      null,
      'arabgfhosdhguo',
      `emission-of-${gases}-bw-${range1}&${range2}of${country}`
    );
  };

  componentDidMount() {
    this.changeUrl(
      this.props.gases,
      this.props.range1,
      this.props.range2,
      this.props.country
    );
    this.initData(
      this.props.country,
      this.props.gases,
      this.props.range1,
      this.props.range2
    );
  }
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '300px',
        }}
        className='chart'>
        <button
          style={{
            height: '3em',
            width: '6em',
            color: 'black',
            background: 'white',
            border: 'solid 1px',
          }}
          onClick={(e) => {
            e.preventDefault();
            this.initData(
              this.props.country,
              this.props.gases,
              this.props.range1,
              this.props.range2
            );
          }}>
          update
        </button>

        <Chart data={this.state.list} axes={this.state.axes} />
      </div>
    );
  }
}

export default Graph;
