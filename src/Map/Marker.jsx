import React from "react";

import "leaflet/dist/leaflet.css";
import { Marker as MUMarker } from "react-leaflet";

import PopUp from "../Map/PopUp";

const Marker = ({ position, icon }) => {
  return (
    <MUMarker position={position} icon={icon}>
      <PopUp />
    </MUMarker>
  );
};

export default Marker;
