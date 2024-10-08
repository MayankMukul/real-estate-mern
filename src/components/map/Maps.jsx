import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css'
import Pin from '../pin/Pin';

export default function Maps({items}) {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {items.map((item)=>{
      return <Pin item={item} key={item.id}></Pin>
    })}

  </MapContainer>
 
  )
}
