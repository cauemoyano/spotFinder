import React from "react";

import "leaflet/dist/leaflet.css";
import { Popup as MUPopUp } from "react-leaflet";

import CustomPopUp from "../Map/CustomPopUp";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const PopUp = () => {
  const theme = createMuiTheme({ palette: { main: "#FB8C00" } });
  return (
    <MUPopUp>
      <MuiThemeProvider theme={theme}>
        <CustomPopUp />
      </MuiThemeProvider>
    </MUPopUp>
  );
};

export default PopUp;
