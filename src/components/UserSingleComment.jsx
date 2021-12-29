import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, IconButton } from "@mui/material";

import SingleComment from "./SingleComment";
import {
  setCommentContent,
  setDeleteModal,
  toggleCommentModal,
} from "../redux/Attraction/attraction.actions";
import { connect } from "react-redux";

const UserSingleComment = ({
  setCommentContent,
  toggleComments,
  toggleDeleteModal,
}) => {
  //comment data comes as props
  const text = `It’s a very nice place to visit and I'd highly recommend it.`;
  const handleEdit = () => {
    setCommentContent(text);
    toggleComments();
  };
  return (
    <Box>
      <SingleComment />
      <Box display="flex" justifyContent="end">
        <IconButton
          color="darkBlue"
          aria-label="edit comment"
          variant="outlined"
          onClick={handleEdit}
        >
          <EditIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="error"
          aria-label="remove comment"
          variant="outlined"
          onClick={toggleDeleteModal}
        >
          <RemoveCircleOutlineIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCommentContent: (data) => dispatch(setCommentContent(data)),
    toggleComments: () => dispatch(toggleCommentModal()),
    toggleDeleteModal: () => dispatch(setDeleteModal()),
  };
};

export default connect(null, mapDispatchToProps)(UserSingleComment);
