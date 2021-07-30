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
    console.log(country, countrytwo);

    Data.forEach((item) => {
      if (item.location == country && item.category == gases) {
        list.push([item.year, item.value]);
      }
      let newList = list.filter((ele) => ele[0] >= range1 && ele[0] <= range2);
      list = newList;
    });
    Data.forEach((item) => {
      if (item.location == countrytwo && item.category == gases) {
        list2.push([item.year, item.value]);
      }
      let newList2 = list2.filter(
        (ele) => ele[0] >= range1 && ele[0] <= range2
      );
      list2 = newList2;
    });

    finalList = [{ data: list }, { data: list2 }];

    this.setState({
      list: finalList,
    });
  }

  changeUrl = (gases, range1, range2, country, countrytwo) => {
    window.history.replaceState(
      null,
      'arabgfhosdhguo',
      `emission-of-${gases}-bw-${range1}&${range2}of${country}and${countrytwo} `
    );
  };

  componentDidMount() {
    this.changeUrl(
      this.props.gases,
      this.props.range1,
      this.props.range2,
      this.props.country,
      this.props.countrytwo,
    );
    this.initData(
      this.props.country,
      this.props.countrytwo,
      this.props.gases,
      this.props.range1,
      this.props.range2
    );
  }
  render() {
    console.log(this.state.list);
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
