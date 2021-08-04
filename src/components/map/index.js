import React, { Component } from 'react';
import SvgMap from './map';
import Dropdown from 'react-dropdown';
import Data from '../../data.json';

class Map extends Component {
  state = {
    list: [],
    value: 1990,
  };

  componentDidMount() {
    let locallist = [];
    Data.map((item) => {
      locallist.push(item.year); // for list for dropdown
    });

    let unique = [...new Set(locallist)]; //seprates duplicate entries

    this.setState({
      list: unique,
    });
  }
  change(e) {
    this.setState({
      value: e, //changes value of year for map
    });
  }

  render() {
    let gas = this.props.gases;
    return (
      <div className='map'>
        <h2>year for map</h2>
        <div className=''>
          <Dropdown
            onChange={(e) => this.change(e.value)} //map value change
            options={this.state.list}
            value={'1990'}
            placeholder='Select an option'
          />
        </div>
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'space-between',
          }}>
          <div
            className='square'
            style={{
              height: '50px',
              width: '50px',
              backgroundColor: '#A40606',
            }}></div>
          <h4>{`>50000`}</h4>
          <div
            className='square'
            style={{
              height: '50px',
              width: '50px',
              backgroundColor: '#7678ED',
            }}></div>
          <h4>{`>40000`}</h4>
          <div
            className='square'
            style={{
              height: '50px',
              width: '50px',
              backgroundColor: '#F35B04',
            }}></div>
          <h4>{`>30000`}</h4>
          <div
            className='square'
            style={{
              height: '50px',
              width: '50px',
              backgroundColor: '#62A87C',
            }}></div>
          <h4>{`>20000`}</h4>

          <div
            className='square'
            style={{
              height: '50px',
              width: '50px',
              backgroundColor: '#663a82',
            }}></div>
          <h4>{`>10000`}</h4>
          <div
            className='square'
            style={{
              height: '50px',
              width: '50px',
              backgroundColor: '#E86A92',
            }}></div>
          <h4>{`>5000`}</h4>

          <div
            className='square'
            style={{
              height: '50px',
              width: '50px',
              backgroundColor: '#F06543',
            }}></div>
          <h4>{`>2500`}</h4>

          <div
            className='square'
            style={{
              height: '50px',
              width: '50px',
              backgroundColor: '#bca0dc',
            }}></div>
          <h4>{`>500`}</h4>
        </div>
        <SvgMap year={this.state.value} category={gas} />
      </div>
    );
  }
}

export default Map;
