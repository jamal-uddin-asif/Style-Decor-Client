import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const Leaflet = () => {
    const [center, setCenter] = useState([])
  const position = [23.6850, 90.3563]
; 

useEffect(()=>{
    axios('/serviceCenter.json')
    .then(data=>{
        setCenter(data.data)
    })
})
  return (
    <div className="h-[400px], w-full border">
      <MapContainer className="h-[400px]" center={position} zoom={7} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            center.map((c, i)=><Marker position={[c.latitude, c.longitude]} key={i}>
            <Popup >{c.city}</Popup>
            </Marker>)
        }
      </MapContainer>
    </div>
  );
};

export default Leaflet;
