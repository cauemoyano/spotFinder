import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";

import Marker from "../../Map/Marker";
import { iconCustom, iconSelected } from "../../Map/Icon";
import { setBounds } from "../../redux/Map/map.actions";
import { getAttractions } from "../../utils/getAttractions";
import { checkOutBounds } from "../../utils/checkOutBounds";
import { defineViewportAttractions } from "../../utils/defineViewportAttractions";
import DetailsModal from "../../components/DetailsModal";

const Map = ({
  data,
  setBounds,
  bounds,
  broadenBounds,
  broadenAttractions,
  viewportAttractions,
  showDetailsModal,
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
    <Container maxWidth="xl">
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        minZoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100%" }}
        whenCreated={(map) => setBounds(map.getBounds())}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          eventHandlers={{
            click: (e) => {
              console.log("map clicked", e);
            },
          }}
        />
        {viewportAttractions &&
          viewportAttractions.map((attraction) => {
            return (
              <Marker
                attraction={attraction}
                icon={iconCustom}
                key={attraction.xid}
                iconSelected={iconSelected}
              />
            );
          })}
        <EventsComponent />
      </MapContainer>
      {showDetailsModal && <DetailsModal />}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.map.data,
    bounds: state.map.bounds,
    broadenBounds: state.map.broadenBounds,
    broadenAttractions: state.map.broadenAttractions,
    viewportAttractions: state.map.viewportAttractions,
    showDetailsModal: state.map.showDetailsModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBounds: (bounds) => dispatch(setBounds(bounds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
