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
  initData(country, countrytwo, gases, range1, range2) {
    let finalList = [];
    let list = [];
    let list2 = [];


    Data.forEach((item) => {
      if (item.location == country && item.category == gases) {
        list.push([item.year, item.value]);
      }
      finalList = [{ data: list }];
    });
    Data.forEach((item) => {
      if (item.location == countrytwo && item.category == gases) {
        list2.push([item.year, item.value]);
      }
      finalList = [{ data: list }, { data: list2 }];
    });
    finalList.forEach((item) =>
      item.data.forEach((e) => {
        if (e[0] < range1) {
          let index = item.data.findIndex((f) => f === e);
          item.data.splice(index);
        }
      })
    );
    this.setState({
      list: finalList,
    });
  }
  componentDidMount() {
    this.initData(
      this.props.country,
      this.props.countrytwo,
      this.props.gases,
      this.props.range1,
      this.props.range2
    );
  }
  render() {
    return (
      <div
        style={{
          width: '400px',
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
              this.props.countrytwo,
              this.props.gases,
              this.props.range1,
              this.props.range2
            );
          }}>
          update
        </button>
        <p>
          Example Graph {this.props.gases} / {this.props.country} /{' '}
          {this.props.countrytwo}
        </p>
        <Chart data={this.state.list} axes={this.state.axes} />
      </div>
    );
  }
}

export default Graph;
