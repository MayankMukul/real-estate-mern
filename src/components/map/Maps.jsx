import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css'
import Pin from '../pin/Pin';

export default function Maps({item}) {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {item.map(item=>{
      <Pin item={item}></Pin>
    })}

  </MapContainer>
 
  )
}
