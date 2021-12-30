import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, IconButton } from "@mui/material";

import SingleComment from "./SingleComment";
import {
  setDeleteModal,
  setEditComment,
} from "../redux/Attraction/attraction.actions";
import { connect } from "react-redux";

const UserSingleComment = ({
  toggleDeleteModal,
  toggleEditComment,
  commentModal,
  comment,
}) => {
  const { _id: id, body: text } = comment;

  const handleEdit = () => {
    toggleEditComment(text, id);
  };
  return (
    <Box>
      <SingleComment {...comment} />
      <Box display="flex" justifyContent="end">
        <IconButton
          color="darkBlue"
          aria-label="edit comment"
          variant="outlined"
          onClick={handleEdit}
          disabled={commentModal}
        >
          <EditIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="error"
          aria-label="remove comment"
          variant="outlined"
          onClick={() => toggleDeleteModal(null, id)}
          disabled={commentModal}
        >
          <RemoveCircleOutlineIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditComment: (data, id) => dispatch(setEditComment(data, id)),
    toggleDeleteModal: (data, id) => dispatch(setDeleteModal(data, id)),
  };
};

const mapStateToProps = (state) => {
  return { commentModal: state.attraction.commentModal };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSingleComment);
