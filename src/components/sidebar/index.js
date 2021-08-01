import React, { useState } from 'react';
import Graph from './graph';
import CountrySelect from './country-select';
import ParameterSelect from './parameter-select';
import Map from '../map/index';
import Range1 from './range1';
import Range2 from './range2';

export default function Sidebar() {
  const [selectedCountry, setSelectedCountry] = useState(['Australia']); //hook to pass country to graph
  const [selectedEmmision, setSelectedEmission] = useState(['co2-Emmisions']); //hook to pass gases array to graph
  const [selectedRange1, setSelectedRange1] = useState('1990'); //hook to pass gases array to graph
  const [selectedRange2, setSelectedRange2] = useState('2014'); //hook to pass gases array to graph

  return (
    <React.Fragment>
      <div className='sidebar'>
        <div
          className='dropdowns'
          style={{
            maxHeight: '50vh',
          }}>
          <h3>selected country</h3>
          <CountrySelect setSelectedCountry={setSelectedCountry} />
          <div
            style={{
              display: 'flex',
              flexFlow: 'row',
              justifyContent: 'space-between',
            }}>
            {selectedCountry.map((e) => {
              return <h3>{e}</h3>;
            })}
          </div>
          <div
            className='container'
            style={{
              display: 'flex',
              flexFlow: 'row',
              justifyContent: 'space-between',
            }}>
            <div className='container'>
              <h3>start range</h3>
              <Range1 setSelectedRange1={setSelectedRange1} />
            </div>

            <div className='container'>
              <h3> end range</h3>
              <Range2 setSelectedRange2={setSelectedRange2} />
            </div>
          </div>
          <h3>gas selection</h3>

          <ParameterSelect setSelectedEmission={setSelectedEmission} />
        </div>

        <Graph
          range1={selectedRange1}
          range2={selectedRange2}
          country={selectedCountry}
          gases={selectedEmmision}
        />
      </div>
      <div className='div'>
        <Map country={selectedCountry} gases={selectedEmmision} />
      </div>
    </React.Fragment>
  );
}
