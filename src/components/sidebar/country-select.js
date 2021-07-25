import React, { Component } from 'react';
import 'react-dropdown/style.css';
import Data from '../../data.json';
import Dropdown from 'react-dropdown';

class CountrySelect extends Component {
  state = {
    list: [],
    value: '',
  };
  change(e) {
    this.props.setSelectedCountry(e);
  }

  componentDidMount() {
    let locallist = [];
    Data.map(item => {
      locallist.push(item.location);
    });

    let unique = [...new Set(locallist)];

    this.setState({
      list: unique,
    });
  }

  render() {
    return (
      <div className="country-select">
        <Dropdown
          onChange={e => this.change(e.value)}
          options={this.state.list}
          value={this.state.list[0]}
          placeholder="Select an option"
        />
      </div>
    );
  }
}

export default CountrySelect;
