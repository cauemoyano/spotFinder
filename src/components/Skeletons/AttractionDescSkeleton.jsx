import { Box, Skeleton } from "@mui/material";
import React from "react";

const AttractionDescSkeleton = () => {
  return (
    <Box display="flex" flexDirection="column" mx={3} mb={5}>
      <Skeleton variant="text" width={"20%"} />
      <Skeleton variant="text" width={"100%"} />
      <Skeleton variant="text" width={"100%"} />
      <Skeleton variant="text" width={"100%"} />
      <Skeleton variant="text" width={"100%"} />
    </Box>
  );
};

export default AttractionDescSkeleton;
