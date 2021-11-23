import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const DetailsModal = ({ attractionDetails: attraction }) => {
  const { name, xid } = attraction;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${process.env.REACT_APP_MAP_TOKEN}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      sx={{
        width: "25%",
        height: "100%",
        zIndex: "99999",
        position: "fixed",
        top: "0",
        right: "0",
        backgroundColor: "#f9fcff",
        backgroundImage: "linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)",
        boxShadow: 3,
      }}
    >
      {data && (
        <img
          src={data.preview.source}
          width={"100%"}
          style={{ maxHeight: "40vh" }}
          alt={name}
        />
      )}
      <Typography variant="h5" py="1rem" align="center">
        {name}
      </Typography>
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
      <Typography variant="body1" py="1rem" px="0.5rem" align="center">
        {data && data["wikipedia_extracts"]?.text}
      </Typography>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    attractionDetails: state.map.attractionDetails,
  };
};

export default connect(mapStateToProps, null)(DetailsModal);
