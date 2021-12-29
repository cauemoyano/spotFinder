import TextField from "@mui/material/TextField";
import { Box, CircularProgress, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRef } from "react";

import {
  setCommentContent,
  toggleCommentModal,
} from "../redux/Attraction/attraction.actions";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import MessageComponent from "./MessageComponent";
import { postComment } from "../utils/attractionApis";

const CommentInput = ({
  commentModal,
  toggleComments,
  commentContent,
  setCommentContent,
  attractionDetails,
}) => {
  const commentWrapper = useRef();
  const commentInputRef = useRef();
  const [input, setInput] = useState(commentContent ? commentContent : "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const { name, xid } = attractionDetails;

  useEffect(() => {
    if (commentModal) {
      setInput(commentContent ? commentContent : "");
      commentWrapper.current.style.maxHeight = "20vh";
      commentInputRef.current.focus();
    } else {
      commentWrapper.current.style.maxHeight = "0vh";
    }
  }, [commentModal]);

  const handleCancel = () => {
    toggleComments();
    setInput("");
    setCommentContent("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    postComment(input, xid, name)
      .then((response) => {
        console.log(response);
        setLoading(false);
        setMessage("success");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setMessage("error");
      });
  };

  const textMessages = {
    success: "Thanks for your rating.",
    error: "Sorry, an error occurred.",
  };

  return (
    <Box
      sx={{
        maxHeight: 0,
        overflowY: "hidden",
        transition: "max-height 0.3s ease-in-out",
      }}
      ref={commentWrapper}
    >
      <TextField
        id="outlined-multiline-static"
        label="Comment"
        multiline
        rows={4}
        variant="outlined"
        sx={{ width: "100%", marginTop: "10px" }}
        value={input}
        onChange={(e) => handleChange(e)}
        inputRef={commentInputRef}
        disabled={loading}
      />
      <Box display="flex" justifyContent="end">
        <IconButton
          color="error"
          aria-label="cancel"
          variant="outlined"
          onClick={handleCancel}
          disabled={loading}
        >
          <CancelIcon fontSize="large" />
        </IconButton>
        <Box sx={{ position: "relative" }}>
          <IconButton
            color="success"
            aria-label="confirm"
            disabled={loading}
            variant="outlined"
            onClick={handleSubmit}
          >
            <SendIcon fontSize="large" />
          </IconButton>
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
      <DeleteModal />
      <MessageComponent
        message={message}
        setMessage={setMessage}
        text={message ? textMessages[message] : ""}
      />
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    commentModal: state.attraction.commentModal,
    commentContent: state.attraction.commentContent,
    attractionDetails: state.map.attractionDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleComments: () => dispatch(toggleCommentModal()),
    setCommentContent: (data) => dispatch(setCommentContent(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
