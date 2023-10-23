import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const NewMap = () => {
  const center = [-29.89828, -71.25857]; // Coordenadas de La Serena, Chile

  return (
    <div style={{ height: '500px' }}>
      <MapContainer center={center} zoom={15} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>La Serena, Chile</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default NewMap;