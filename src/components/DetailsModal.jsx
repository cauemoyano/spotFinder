import { Fab, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import AttractionAddress from "./AttractionAddress";
import AttractionDescription from "./AttractionDescription";
import GiveReview from "./GiveReview";
import Review from "./Review";
import Comments from "./Comments";
import UserComments from "./UserComments";
import { useRef } from "react";
import {
  getAttractionData,
  setCommentContent,
  toggleCommentModal,
} from "../redux/Attraction/attraction.actions";
import AttractionImage from "./AttractionImage";

const DetailsModal = ({
  attractionDetails: attraction,
  toggleComments,
  getAttractionData,
  attractionMainData: data,
  loadingData,
}) => {
  const { name, xid } = attraction;
  /*   const [data, setData] = useState(null); */
  const detailsWrapperRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    getAttractionData(xid);
  }, [xid]);

  const resizeObserver = new ResizeObserver((entries) => {
    /* console.log(detailsWrapperRef.current.scrollHeight, window.innerHeight); */
    console.log(detailsWrapperRef.current);
    if (entries[0].target.scrollHeight > window.innerHeight) {
      scrollRef.current.style.opacity = 1;
      detailsWrapperRef.current.addEventListener("scroll", () => {
        if (detailsWrapperRef.current.scrollTop > 0) {
          scrollRef.current.style.opacity = 0;
        } else {
          scrollRef.current.style.opacity = 1;
        }
      });
    }
  });

  useEffect(() => {
    if (detailsWrapperRef.current) {
      resizeObserver.observe(detailsWrapperRef.current);
    }

    return () => {
      if (detailsWrapperRef.current) {
        resizeObserver.unobserve(detailsWrapperRef.current);
      }
      toggleComments(false);
    };
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
        /*  backgroundImage: "linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)", */
        boxShadow: 3,
        overflowY: "auto",
      }}
      className="detailsAttractionWrapper"
      ref={detailsWrapperRef}
      id="detailsWrapper"
    >
      <AttractionImage data={data} name={name} loading={loadingData} />
      <Typography variant="h5" py="1rem" align="center" color="primary.dark">
        {name}
      </Typography>
      <Review />
      {data && <AttractionAddress data={data} />}
      {data && data["wikipedia_extracts"] && (
        <AttractionDescription data={data} />
      )}
      <GiveReview xid={xid} name={name} />
      <UserComments />
      <Comments />
      <Fab
        sx={{
          position: "absolute",
          top: "calc(100vh - 50px)",
          left: "50%",
          opacity: "0",
          transition: "opacity 0.3s ease-out",
        }}
        size="small"
        color="secondary"
        aria-label="add"
        ref={scrollRef}
      >
        <KeyboardArrowDownIcon />
      </Fab>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    attractionUsersData: state.attraction.attractionUsersData,
    attractionDetails: state.map.attractionDetails,
    commentModal: state.attraction.commentModal,
    attractionMainData: state.attraction.attractionMainData,
    loadingData: state.attraction.loadingData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleComments: (data) => dispatch(toggleCommentModal(data)),
    setCommentContent: (data) => dispatch(setCommentContent(data)),
    getAttractionData: (data) => dispatch(getAttractionData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);
