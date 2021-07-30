import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import Data from '../../data.json';
mapboxgl.accessToken =
  'pk.eyJ1Ijoic2hhaHJhaHVsNzk1IiwiYSI6ImNrcm5oMG9kdTB3enYyd25vMW80ZXIyZ2cifQ.41G1tkWHDF8OOGTtBfs7aQ';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [],
      zoom: 5,
    };
  }

  returnCoordinates = () => {
    let coor = [];
    let arr = [];
    Data.forEach((item) => {
      if (item.location == this.props.country) {
        coor.push([item.lang, item.lat]);
      }
    });
    arr.push(coor[1][0]);
    arr.push(coor[1][1]);
    console.log(arr);

    return arr;
  };
  componentDidMount = async () => {
    let circle = await this.returnCoordinates();
    console.log(circle)
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: circle,
      zoom: this.state.zoom,
    });
  };
  render() {
    return (
      <div className='div'>
        <h1>{(this.state.center[0], this.state.center[1])}</h1>
        <div
          ref={(el) => (this.mapContainer = el)}
          style={{ width: '100vw', height: '100vh' }}></div>
      </div>
    );
  }
}

export default Map;
