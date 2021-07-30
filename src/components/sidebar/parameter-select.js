import React, { Component } from 'react';
import 'react-dropdown/style.css';
import Data from '../../data.json';
import Dropdown from 'react-dropdown';

class ParameterSelect extends Component {
  state = {
    list: [],
  };
  // for creating array that is further passed
  change(e) {

    this.props.setSelectedEmission(e); //sends data to hook
  }
 
  // adds data to dropdown when its mounted
  componentDidMount() {
    let locallist = [];
    Data.map(item => {
      locallist.push(item.category);
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
          onChange={e => this.change(e.value)} // passes data to fx everytime value is changed
          options={this.state.list}
          value={this.state.list[0]}
          placeholder="Select an option"
        />
      </div>
    );
  }
}

export default ParameterSelect;
