import React, { useState } from 'react';
import Graph from './graph';
import CountrySelect from './country-select';
import ParameterSelect from './parameter-select';
import Map from '../map/index';

export default function Sidebar() {
  const [selectedCountry, setSelectedCountry] = useState('Australia');
  const [selectedEmmision, setSelectedEmission] = useState(['co2-Emmisions']);

  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="dropdowns">
          <CountrySelect setSelectedCountry={setSelectedCountry} />
          <br />
          <ParameterSelect setSelectedEmission={setSelectedEmission} />
        </div>

        <Graph country={selectedCountry} gases={selectedEmmision} />
      </div>
      <Map gases={selectedEmmision}></Map>
    </React.Fragment>
  );
}
