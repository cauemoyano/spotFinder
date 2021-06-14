import React from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  /* Marker,
  Popup, */
  useMapEvents,
} from "react-leaflet";

import { iconCustom } from "../Map/Icon";

import Marker from "../Map/Marker";

const Map = () => {
  const positions = [
    [51.505, -0.09],
    [51.504, -0.09],
    [51.504, -0.08],
  ];

  const EventsComponent = () => {
    const map = useMapEvents({
      dragend: (e) => {
        console.log("mapCenter", e.target.getCenter());
        console.log("map bounds", e.target.getBounds());
      },
    });
    return null;
  };

  return (
    <div>
      <MapContainer
        center={[51.505, -0.49]}
        zoom={13}
        minZoom={10}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {positions.map((position, index) => {
          return <Marker position={position} icon={iconCustom} key={index} />;
        })}
        <EventsComponent />
      </MapContainer>
    </div>
  );
};

export default Map;