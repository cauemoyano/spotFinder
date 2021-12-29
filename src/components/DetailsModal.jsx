import { Fab, Slide, TextField, Typography } from "@mui/material";
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
  setCommentContent,
  toggleCommentModal,
} from "../redux/Attraction/attraction.actions";

const DetailsModal = ({
  attractionDetails: attraction,
  toggleComments,
  setCommentContent,
  commentModal,
}) => {
  const { name, xid } = attraction;
  const [data, setData] = useState(null);
  const [attractionUsersData, setAttractionUsersData] = useState(null);
  const detailsWrapperRef = useRef();
  const scrollRef = useRef();

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
    axios
      .get(`/api/v1/attraction/${xid}`)
      .then((res) => setAttractionUsersData(res.data))
      .catch((err) => console.log(err));
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
      if (commentModal) {
        toggleComments();
      }

      setCommentContent("");
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
      {data && (
        <img
          src={data.preview.source}
          width={"100%"}
          style={{ maxHeight: "40vh" }}
          alt={name}
        />
      )}
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
    attractionDetails: state.map.attractionDetails,
    commentModal: state.attraction.commentModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleComments: (data) => dispatch(toggleCommentModal(data)),
    setCommentContent: (data) => dispatch(setCommentContent(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);
