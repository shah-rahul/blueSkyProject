import React, { Component } from 'react';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import Data from '../../data.json';

class Range1 extends Component {
  state = {
    list: [],
  };
  //passes data to hook
  change(e) {
    this.props.setSelectedRange1(e);
  }
  // initialises data when component gets loaded once
  componentDidMount() {
    let locallist = [];
    Data.map((item) => {
      locallist.push(item.year);
    });

    let unique = [...new Set(locallist)]; //seprates duplicate entries

    this.setState({
      list: unique,
    });
  }

  render() {
    return (
      <div className='country-select'>
        <Dropdown
          onChange={(e) => this.change(e.value)}
          options={this.state.list}
          value={'1990'}
          placeholder='Select an option'
        />
      </div>
    );
  }
}

export default Range1;
