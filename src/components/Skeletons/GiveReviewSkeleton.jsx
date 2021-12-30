import { Box, Skeleton } from "@mui/material";
import React from "react";

const GiveReviewSkeleton = () => {
  return (
    <Box display="flex" mx={3} mb={6}>
      <Skeleton variant="text" width={"30%"} sx={{ marginRight: "0.5rem" }} />
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="circular" width={30} height={30} />
    </Box>
  );
};

export default GiveReviewSkeleton;
