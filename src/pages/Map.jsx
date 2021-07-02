import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";

import { iconCustom } from "../Map/Icon";

import Marker from "../Map/Marker";

import { connect } from "react-redux";
import { setBounds } from "../redux/Map/map.actions";

import { getAttractions } from "../utils/getAttractions";
import { checkOutBounds } from "../utils/checkOutBounds";
import { defineViewportAttractions } from "../utils/defineViewportAttractions";

const Map = ({
  data,
  setBounds,
  bounds,
  broadenBounds,
  broadenAttractions,
  viewportAttractions,
}) => {
  const { lat, lon } = data;
  const defineAttractions = async () => {
    console.log("defining attractions");
    if (!broadenBounds) {
      await getAttractions(bounds);
    } else {
      if (checkOutBounds(bounds, broadenBounds)) {
        await getAttractions(bounds);
      }
    }
  };
  useEffect(() => {
    if (bounds.length === 0) return;
    defineAttractions().then(() => {
      defineViewportAttractions(bounds, broadenAttractions);
    });
  }, [bounds, broadenAttractions]);

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
        {viewportAttractions &&
          viewportAttractions.map((attraction) => {
            return (
              <Marker
                attraction={attraction}
                icon={iconCustom}
                key={attraction.xid}
              />
            );
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
    broadenAttractions: state.map.broadenAttractions,
    viewportAttractions: state.map.viewportAttractions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBounds: (bounds) => dispatch(setBounds(bounds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
