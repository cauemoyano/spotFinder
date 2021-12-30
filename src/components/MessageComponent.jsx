import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MessageComponent = ({ message, setMessage, text }) => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setMessage(null);
  };

  useEffect(() => {
    if (!message) return;
    setOpen(true);
  }, [message]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={message ? message : "info"}
        sx={{ width: "100%" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default MessageComponent;
