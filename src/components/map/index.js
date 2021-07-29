import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhaHJhaHVsNzk1IiwiYSI6ImNrcm5oMG9kdTB3enYyd25vMW80ZXIyZ2cifQ.41G1tkWHDF8OOGTtBfs7aQ'
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 28.7,
      lng: 77.10,
      zoom: 3,
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }
  render() {
    return (
      <div className='div'>
        <div
          ref={(el) => (this.mapContainer = el)}
          style={{ width: '100vw', height: '100vh' }}></div>
      </div>
    );
  }
}

export default Map;
