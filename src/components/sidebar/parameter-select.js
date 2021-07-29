import React, { Component } from 'react';
import 'react-dropdown/style.css';
import Data from '../../data.json';
import Dropdown from 'react-dropdown';

class ParameterSelect extends Component {
  state = {
    list: [],
    pramList: ['co2-Emmisions'],
  };
  // for creating array that is further passed
  change(e) {
    console.log('called');
    if (this.state.pramList.length == 1) { //check for 1st addition
      this.state.pramList.push(e);
    } else {
      this.setState({
        pramList: [...this.state.pramList, e], //2nd addition 
      });
    }

    this.props.setSelectedEmission(this.state.pramList); //sends data to hook
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
