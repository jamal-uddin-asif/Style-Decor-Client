import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Container from "../../../Components/Shared/Container";

const Leaflet = () => {
  const [center, setCenter] = useState([]);
  const position = [23.685, 90.3563];
  useEffect(() => {
    axios("/serviceCenter.json").then((data) => {
      setCenter(data.data);
    });
  });
  return (
    <Container>
      <div className="md:grid grid-cols-2 py-10">
        <div className="flex justify-center text-center items-center ">
          <div>
          <h3 className="text-2xl md:text-4xl mb-5 font-semibold">City & District-Wide <span className="text-secondary">Service Availability</span></h3>
        </div>
        </div>
        <div className="h-[450px]   w-full ">
          <MapContainer
            className="h-[450px] "
            center={position}
            zoom={7}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {center.map((c, i) => (
              <Marker position={[c.latitude, c.longitude]} key={i}>
                <Popup>{c.city}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </Container>
  );
};

export default Leaflet;
