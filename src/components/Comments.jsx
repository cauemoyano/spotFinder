import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getOtherUsersComments } from "../utils/arrayFunctions";

import SingleComment from "./SingleComment";

const Comments = ({ attractionUsersData, user }) => {
  let comments = [];

  useEffect(() => {
    if (attractionUsersData) {
      comments = getOtherUsersComments(attractionUsersData.comments, user._id);
    }
  }, [attractionUsersData]);

  return (
    <Box px={3}>
      <Typography variant="h6">What other people said:</Typography>
      {!comments.length && (
        <Typography variant="body1" color="gray.dark">
          No comments yet
        </Typography>
      )}
      {comments.map((comment) => (
        <SingleComment key={comment._id} {...comment} />
      ))}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    attractionUsersData: state.attraction.attractionUsersData,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, null)(Comments);
