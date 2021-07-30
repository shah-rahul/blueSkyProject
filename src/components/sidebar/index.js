import React, { useState } from 'react';
import Graph from './graph';
import CountrySelect from './country-select';
import ParameterSelect from './parameter-select';
import Map from '../map/index';
import CountrySelecttwo from './country-select2';
import Range1 from './range1';
import Range2 from './range2';

export default function Sidebar() {
  const [selectedCountry, setSelectedCountry] = useState('Australia'); //hook to pass country to graph
  const [selectedCountry2, setSelectedCountry2] = useState('Australia'); //hook to pass country to graph
  const [selectedEmmision, setSelectedEmission] = useState(['co2-Emmisions']); //hook to pass gases array to graph
  const [selectedRange1, setSelectedRange1] = useState('1990'); //hook to pass gases array to graph
  const [selectedRange2, setSelectedRange2] = useState('2014'); //hook to pass gases array to graph

  return (
    <React.Fragment>
      <div
        className='sidebar'
        style={{
          border: '10em',
          borderRadius: '100px',
        }}>
        <div className='dropdowns'>
          <CountrySelect setSelectedCountry={setSelectedCountry} />
          <br />
          <CountrySelecttwo setSelectedCountry={setSelectedCountry2} />
          <br />
          <div className="container">
            <Range1 setSelectedRange1={setSelectedRange1}/>
          <br />
            <Range2 setSelectedRange2={setSelectedRange2}/>
          </div>
          <br />
          <ParameterSelect setSelectedEmission={setSelectedEmission} />
        </div>

        <Graph
          range1={selectedRange1}
          range2={selectedRange2}
          country={selectedCountry}
          countrytwo={selectedCountry2}
          gases={selectedEmmision}
        />
      </div>
      <div className='div'>
        <Map country={selectedCountry} />
      </div>
    </React.Fragment>
  );
}
