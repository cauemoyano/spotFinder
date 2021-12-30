import { Box, CircularProgress, Modal, Typography } from "@mui/material";

import React, { useState } from "react";
import { connect } from "react-redux";

import {
  setAttractionUsersData,
  setDeleteModal,
} from "../redux/Attraction/attraction.actions";
import { deleteComment } from "../utils/attractionApis";
import Controls from "./controls/controls";
import MessageComponent from "./MessageComponent";

const DeleteModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "clamp(300px, 30vw, 500px)",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const DeleteModal = ({
  deleteModal,
  toggleDeleteModal,
  attractionDetails,
  editComment,
  setAttractionUsersData,
}) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const { name, xid } = attractionDetails;

  const handleDelete = async () => {
    setLoading(true);
    try {
      let response;
      if (editComment) {
        response = await deleteComment(editComment, xid, name);
      }
      setAttractionUsersData(response.data);
      setMessage("success");
    } catch (error) {
      console.log(error);
      setMessage("error");
    } finally {
      setLoading(false);
    }
    toggleDeleteModal();
  };

  const textMessages = {
    success: "Comment deleted successfully.",
    error: "Sorry, an error occurred.",
  };

  return (
    <>
      <Modal
        open={deleteModal}
        onClose={toggleDeleteModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={DeleteModalStyle}>
          <Typography p={2} variant="h6">
            Are you sure you want to delete this comment?
          </Typography>
          <Box display="flex" justifyContent="end" pr={2}>
            <Controls.Button
              color="error"
              aria-label="cancel"
              variant="outlined"
              onClick={toggleDeleteModal}
              text="Cancel"
              sx={{ marginRight: "1rem" }}
              disabled={loading}
            ></Controls.Button>
            <Box sx={{ position: "relative" }}>
              <Controls.Button
                text="Delete"
                color="error"
                aria-label="confirm"
                onClick={handleDelete}
                disabled={loading}
              ></Controls.Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: "primary.dark",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
      <MessageComponent
        message={message}
        setMessage={setMessage}
        text={message ? textMessages[message] : ""}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    deleteModal: state.attraction.deleteModal,
    attractionDetails: state.map.attractionDetails,
    editComment: state.attraction.editComment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDeleteModal: () => dispatch(setDeleteModal()),
    setAttractionUsersData: (data) => dispatch(setAttractionUsersData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
