import React from "react";

import "leaflet/dist/leaflet.css";
import { Popup as MUPopUp } from "react-leaflet";

import CustomPopUp from "../Map/CustomPopUp";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const PopUp = ({ attraction }) => {
  const theme = createMuiTheme({ palette: { main: "#FFFFFF" } });
  return (
    <MUPopUp>
      <MuiThemeProvider theme={theme}>
        <CustomPopUp attraction={attraction} />
      </MuiThemeProvider>
    </MUPopUp>
  );
};

export default PopUp;
