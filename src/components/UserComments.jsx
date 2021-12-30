import { Box, Divider, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toggleCommentModal } from "../redux/Attraction/attraction.actions";
import { getUserComments } from "../utils/arrayFunctions";
import CommentInput from "./CommentInput";
import Controls from "./controls/controls";
import DeleteModal from "./DeleteModal";
import UserSingleComment from "./UserSingleComment";

const UserComments = ({
  toggleComments,
  commentModal,
  attractionUsersData,
  user,
}) => {
  const [userComments, setComments] = useState([]);

  useEffect(() => {
    if (attractionUsersData) {
      setComments(getUserComments(attractionUsersData.comments, user._id));
    } else {
      setComments([]);
    }
  }, [attractionUsersData]);

  return (
    <Box px={3} mb={2}>
      <Divider sx={{ marginBottom: "1rem" }} />
      <CommentInput />
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Box>
          <Typography variant="h6">Your Comments:</Typography>
          {!userComments.length && (
            <Typography variant="body1" color="gray.dark">
              No comments yet
            </Typography>
          )}
        </Box>
        <Box>
          {!commentModal && (
            <Controls.Button
              text={"Add Comment"}
              onClick={() => toggleComments()}
            ></Controls.Button>
          )}
        </Box>
      </Box>
      {userComments.map((comment) => (
        <UserSingleComment key={comment._id} comment={comment} />
      ))}
      <Divider />
      <DeleteModal />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { toggleComments: () => dispatch(toggleCommentModal()) };
};

const mapStateToProps = (state) => {
  return {
    commentModal: state.attraction.commentModal,
    attractionUsersData: state.attraction.attractionUsersData,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComments);
