import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useRef, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "12vh",
    overflowY: "hidden",
    position: "relative",
    transition: "all 0.4s linear",
  },
  fadeDiv: {
    position: "absolute",
    top: "4vh",
    left: 0,
    background: "rgb(249,252,255)",
    background:
      "linear-gradient(0deg, rgba(249,252,255,1) 0%, rgba(249,252,255,1) 35%, rgba(249,252,255,0) 100%)",
  },
  showMoreButton: {
    position: "absolute !important",
    right: 0,
    bottom: 0,
    color: theme.palette.secondary.main,
  },
  showLessButton: {
    float: "right",
    color: theme.palette.secondary.main,
  },
}));

const AttractionDescription = ({ data }) => {
  const style = useStyles();
  const descRef = useRef();
  const overlayRef = useRef();
  const [show, showSet] = useState(false);

  const handleShow = () => {
    showSet(!show);
  };
  useEffect(() => {
    if (show) {
      descRef.current.style.maxHeight = "100vh";
      overlayRef.current.style.opacity = "0";
      overlayRef.current.style.transition = "none";
      overlayRef.current.firstChild.style.pointerEvents = "none";
    } else {
      descRef.current.style.maxHeight = "12vh";
      overlayRef.current.style.opacity = "1";
      overlayRef.current.style.transition = "all 0.1s linear 0.3s";
      overlayRef.current.firstChild.style.pointerEvents = "auto";
    }
  }, [show]);
  return (
    <Box mx={3} className={style.root} ref={descRef}>
      <Typography variant="h6">Description:</Typography>
      <Typography variant="body1">{data["wikipedia_extracts"].text}</Typography>
      <Box width="100%" height="8vh" className={style.fadeDiv} ref={overlayRef}>
        <Button
          variant="text"
          color="secondary"
          className={style.showMoreButton}
          onClick={handleShow}
        >
          Show More
        </Button>
      </Box>
      <Button
        variant="text"
        color="secondary"
        className={style.showLessButton}
        onClick={handleShow}
      >
        Show Less
      </Button>
    </Box>
  );
};

export default AttractionDescription;
