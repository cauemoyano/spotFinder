import { Box, IconButton, Modal, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";
import { connect } from "react-redux";

import { setDeleteModal } from "../redux/Attraction/attraction.actions";

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

const DeleteModal = ({ deleteModal, toggleDeleteModal }) => {
  return (
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
          <IconButton
            color="error"
            aria-label="cancel"
            variant="outlined"
            onClick={toggleDeleteModal}
          >
            <CancelIcon fontSize="large" />
          </IconButton>
          <IconButton color="success" aria-label="confirm" variant="outlined">
            <CheckCircleIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    deleteModal: state.attraction.deleteModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDeleteModal: () => dispatch(setDeleteModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
