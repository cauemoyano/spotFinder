import { Rating, Box, Typography } from "@mui/material";
import React from "react";

const Review = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" pb="1rem">
      <Typography variant="h4" mr="1rem">
        2.5
      </Typography>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </Box>
  );
};

export default Review;
