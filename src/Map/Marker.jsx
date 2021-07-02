import React from "react";

import "leaflet/dist/leaflet.css";
import { Marker as MUMarker } from "react-leaflet";

import PopUp from "../Map/PopUp";

const Marker = ({ attraction, icon }) => {
  const {
    point: { lat, lon },
  } = attraction;
  return (
    <MUMarker position={[lat, lon]} icon={icon}>
      <PopUp attraction={attraction} />
    </MUMarker>
  );
};

export default Marker;
