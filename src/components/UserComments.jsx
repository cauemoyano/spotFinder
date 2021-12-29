import { Box, Divider, Typography } from "@mui/material";

import React from "react";
import { connect } from "react-redux";
import { toggleCommentModal } from "../redux/Attraction/attraction.actions";
import CommentInput from "./CommentInput";
import Controls from "./controls/controls";
import UserSingleComment from "./UserSingleComment";

const UserComments = ({ toggleComments, commentModal }) => {
  return (
    <Box px={3} mb={2}>
      <Divider sx={{ marginBottom: "1rem" }} />
      <CommentInput />
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h6">Your Comments:</Typography>
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
      <UserSingleComment />
      <Divider />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { toggleComments: () => dispatch(toggleCommentModal()) };
};

const mapStateToProps = (state) => {
  return { commentModal: state.attraction.commentModal };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComments);
