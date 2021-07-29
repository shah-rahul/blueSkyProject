import React, { useState } from 'react';
import Graph from './graph';
import CountrySelect from './country-select';
import ParameterSelect from './parameter-select';
import Map from '../map/index';

export default function Sidebar() {
  const [selectedCountry, setSelectedCountry] = useState('Australia'); //hook to pass country to graph 
  const [selectedEmmision, setSelectedEmission] = useState(['co2-Emmisions']); //hook to pass gases array to graph

  return (
    <React.Fragment>
      <div className="sidebar" style = {
        {
          border: '10em',
          borderRadius : '100px'
        }
      }> 
        <div className="dropdowns">
          <CountrySelect setSelectedCountry={setSelectedCountry} />
          <br />
          <ParameterSelect setSelectedEmission={setSelectedEmission} />
        </div>

        <Graph country={selectedCountry} gases={selectedEmmision} />
      </div>
   
    </React.Fragment>
  );
}
