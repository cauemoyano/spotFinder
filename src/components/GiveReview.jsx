import { Box, CircularProgress, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { useState } from "react";
import MessageComponent from "./MessageComponent";
import { postReview } from "../utils/attractionApis";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUserReview } from "../utils/arrayFunctions";
import { setAttractionUsersData } from "../redux/Attraction/attraction.actions";

const GiveReview = ({
  xid,
  name,
  attractionUsersData,
  user,
  setAttractionUsersData,
}) => {
  const [value, setValue] = useState(2.5);
  const [hover, setHover] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  let userReview = null;
  //todo user id
  const userId = "iufhaiuhffa";
  useEffect(() => {
    if (attractionUsersData) {
      userReview = getUserReview(attractionUsersData.reviews, user._id);
      if (userReview) {
        setValue(userReview.grade);
      }
    }
  }, [attractionUsersData]);

  const handleChange = async (newValue) => {
    let response;
    setLoading(true);
    setValue(newValue);
    try {
      response = await postReview(newValue, xid, name);
      setAttractionUsersData(response.data);
      setMessage("success");
    } catch (error) {
      console.log(error);
      setMessage("error");
    } finally {
      setLoading(false);
    }
  };

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
            handleChange(newValue);
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

const mapStateToProps = (state) => {
  return {
    attractionUsersData: state.attraction.attractionUsersData,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAttractionUsersData: (data) => dispatch(setAttractionUsersData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GiveReview);
