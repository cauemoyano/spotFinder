import React from "react";

import "leaflet/dist/leaflet.css";
import { Popup as MUPopUp } from "react-leaflet";

import CustomPopUp from "../Map/CustomPopUp";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { setShowDetailsModal } from "../redux/Map/map.actions";
import { connect } from "react-redux";

const PopUp = ({ attraction, setShowDetailsModal }) => {
  const theme = createMuiTheme({ palette: { main: "#FFFFFF" } });

  const handleOpen = () => {
    setShowDetailsModal({ status: true, data: attraction });
  };
  const handleClose = () => {
    setShowDetailsModal({ status: false, data: null });
  };

  return (
    <MUPopUp onOpen={handleOpen} onClose={handleClose} className="hidden">
      {/* <MuiThemeProvider theme={theme}>
        <CustomPopUp attraction={attraction} />
      </MuiThemeProvider> */}
    </MUPopUp>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowDetailsModal: (state) => dispatch(setShowDetailsModal(state)),
  };
};

export default connect(null, mapDispatchToProps)(PopUp);
