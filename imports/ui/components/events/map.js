import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class EventMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <Map center={this.props.latLong} zoom={17}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={this.props.latLong}>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
        </Marker>
      </Map>
    );
  }
}
