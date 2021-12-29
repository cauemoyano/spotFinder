import { Typography, Box } from "@mui/material";
import React from "react";

const AttractionAddress = ({ data }) => {
  return (
    <Box mb={2}>
      <Typography variant="body2" align="center">
        {data &&
          data.address.road &&
          `${
            data.address.hasOwnProperty("house_number")
              ? data.address["house_number"]
              : ""
          }${data.address.hasOwnProperty("house_number") ? " " : ""}${
            data.address.road
          }`}
      </Typography>
      <Typography variant="body2" align="center">
        {data && data.address.postcode && `${data.address.postcode}`}
      </Typography>
      <Typography variant="body2" align="center">
        {data &&
          data.address.city &&
          `${data.address.city}${data.address.state && " - "} ${
            data.address.state && data.address.state
          }`}
      </Typography>
    </Box>
  );
};

export default AttractionAddress;
