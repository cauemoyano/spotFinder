import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";

import { iconCustom } from "../Map/Icon";

import Marker from "../Map/Marker";

import { connect } from "react-redux";
import { setBounds } from "../redux/Map/map.actions";

import { getAttractions } from "../utils/getAttractions";
import { checkOutBounds } from "../utils/checkOutBounds";

const Map = ({ data, setBounds, bounds, broadenBounds }) => {
  const { lat, lon } = data;
  const positions = [
    /*  [51.505, -0.09],
    [51.504, -0.09],
    [51.504, -0.08], */
  ];

  useEffect(() => {
    if (bounds.length === 0) return;
    if (!broadenBounds) {
      getAttractions(bounds);
    } else {
      if (checkOutBounds(bounds, broadenBounds)) {
        getAttractions(bounds);
      }
    }
    /* const {
      _northEast: { lat: maxLat, lng: maxLon },
      _southWest: { lat: minLat, lng: minLon },
    } = bounds; */

    /* fetchData(
      `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${minLon}&lon_max=${maxLon}&lat_min=${minLat}&lat_max=${maxLat}&rate=3&format=geojson&limit=5000&apikey=5ae2e3f221c38a28845f05b6484f463aeb66bd736d2d3ecdb85a6368`
    ).then((data) => console.log(data)); */
  }, [bounds]);

  const EventsComponent = () => {
    const map = useMapEvents({
      dragend: (e) => {
        console.log("mapCenter", e.target.getCenter());
        console.log("map bounds", e.target.getBounds());
        setBounds(e.target.getBounds());
      },
      zoomend: (e) => {
        console.log("mapCenter", e.target.getCenter());
        console.log("map bounds", e.target.getBounds());
        setBounds(e.target.getBounds());
      },
    });
    return null;
  };

  return (
    <div>
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        minZoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100vw" }}
        whenCreated={(map) => setBounds(map.getBounds())}
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

const mapStateToProps = (state) => {
  return {
    data: state.map.data,
    bounds: state.map.bounds,
    broadenBounds: state.map.broadenBounds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBounds: (bounds) => dispatch(setBounds(bounds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
