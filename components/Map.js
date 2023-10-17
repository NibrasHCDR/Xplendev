import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '440px',
  height: '220px',
  marginLeft: '', // Esto puede ayudar a centrar el mapa
  paddingRight: '' // Esto también puede ayudar a centrar el mapa
};

export class MapContainer extends React.Component {
  render() {
    const location = { lat: -29.89846, lng: -71.25858 }; // Coordenadas de Sta. Margarita del Mar 24, 17111, La Serena, Coquimbo

    return (
        <div className="map-container">
      <Map
        google={this.props.google}
        style={mapStyles}
        initialCenter={location}
        zoom={16}
      >
        <Marker position={location} />
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer);