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

  initData(country, gases) {
    let finalList = [];
    let list = [];
    let list2 = [];
    let list3 = [];

    Data.forEach(item => {
      if (item.location === country && item.category === gases[0]) {
        list.push([item.year, item.value]);
      }
      finalList = [{ data: list }];
    });
    if (gases[1]) {
      Data.forEach(item => {
        if (item.location === country && item.category === gases[1]) {
          list2.push([item.year, item.value]);
        }
      });

      finalList = [{ data: list }, { data: list2 }];
    }
    if (gases[2]) {
      Data.forEach(item => {
        if (item.location === country && item.category === gases[2]) {
          list3.push([item.year, item.value]);
        }
      });

      finalList = [{ data: list }, { data: list2 }, { data: list3 }];
    }
    this.setState({
      list: finalList,
    });
  }

  componentDidMount() {
    this.initData(this.props.country, this.props.gases);
  }
  render() {
    let pramList = [...new Set(this.props.gases)];
    console.log(pramList);
    return (
      <div
        style={{
          width: '400px',
          height: '300px',
        }}
        className="chart"
      >
        <button
          style={{ height: '3em', width: '6em', color: "black", background: 'white', border: 'solid 1px'} }
          onClick={e => {
            e.preventDefault();
            this.initData(this.props.country, this.props.gases);
          }}
        >
          update
        </button>
        <p>
          Example Graph {this.props.country} / {pramList[0]} /{pramList[1]} /{' '}
          {pramList[2]}
        </p>
        <Chart data={this.state.list} axes={this.state.axes} />
      </div>
    );
  }
}

export default Graph;
