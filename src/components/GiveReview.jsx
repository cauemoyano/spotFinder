import { Box, CircularProgress, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { useState } from "react";
import MessageComponent from "./MessageComponent";
import { postReview } from "../utils/attractionApis";
import { useEffect } from "react";

const GiveReview = ({ xid, name }) => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    postReview(value, xid, name)
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
  }, [value]);

  const textMessages = {
    success: "Thanks for your rating.",
    error: "Sorry, an error occurred.",
  };

  return (
    <Box display="flex" p="1.5rem">
      <Typography variant="h6" mr={2}>
        Leave a Rating:
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          size="large"
          disabled={loading}
        />
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
      <MessageComponent
        message={message}
        setMessage={setMessage}
        text={message ? textMessages[message] : ""}
      />
    </Box>
  );
};

export default GiveReview;
