import { Box, Skeleton } from "@mui/material";
import React from "react";

const ReviewSkeleton = () => {
  return (
    <Box display="flex" justifyContent="center" mb={2}>
      <Skeleton
        variant="text"
        width={"2rem"}
        height={"5vh"}
        sx={{ marginRight: "1rem" }}
      />
      <Skeleton variant="text" width={"40%"} height={"5vh"} />
    </Box>
  );
};

export default ReviewSkeleton;
