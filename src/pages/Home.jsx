import React, { Component } from "react";

import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CitySelector from "../components/CitySelector";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

const Home = () => {
  const homeStyle = useStyles();

  return (
    <Container maxWidth="xl" className={homeStyle.root}>
      <Typography variant="h1">Spot Finder</Typography>
      <Typography variant="subtitle1" gutterBottom={true}>
        Find the best places to visit
      </Typography>
      <CitySelector />
    </Container>
  );
};

export default Home;
