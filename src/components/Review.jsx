import { Rating, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAttractionAverageReview } from "../utils/arrayFunctions";

const Review = ({ attractionUsersData }) => {
  const [average, setAverage] = useState(null);
  useEffect(() => {
    if (attractionUsersData) {
      setAverage(getAttractionAverageReview(attractionUsersData.reviews));
    } else {
      setAverage(null);
    }
  }, [attractionUsersData]);
  return (
    <Box display="flex" justifyContent="center" alignItems="center" pb="1rem">
      <Typography variant="h4" mr="1rem">
        {average ? average : "-"}
      </Typography>
      {average ? (
        <Box>
          <Rating
            name="half-rating-read"
            value={average}
            precision={0.5}
            readOnly
          />
          <Typography variant="body2" color="gray.dark" textAlign={"right"}>
            {attractionUsersData?.reviews.length === 1
              ? "1 Review"
              : `${attractionUsersData?.reviews.length} Reviews`}
          </Typography>
        </Box>
      ) : (
        <Typography variant="h6" color="gray.dark">
          No reviews yet
        </Typography>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { attractionUsersData: state.attraction.attractionUsersData };
};

export default connect(mapStateToProps, null)(Review);
