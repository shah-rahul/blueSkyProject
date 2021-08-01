import React, { Component } from 'react';
import 'react-dropdown/style.css';
import Data from '../../data.json';
import Dropdown from 'react-dropdown';

class CountrySelect extends Component {
  state = {
    list: [],
    countryList: ['Australia'],
  };
  //passes data to hook
  change(e) {
    if (this.state.countryList.length == 1) {
      this.state.countryList.push(e);
    } else {
      this.setState({
        countryList: [...this.state.countryList, e],
      });
    }

    this.props.setSelectedCountry(this.state.countryList);
  }
  // initialises data when component gets loaded once
  componentDidMount() {
    let locallist = [];
    Data.map((item) => {
      locallist.push(item.location);
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
          value={this.state.list[0]}
          placeholder='Select an option'
        />
      </div>
    );
  }
}

export default CountrySelect;

