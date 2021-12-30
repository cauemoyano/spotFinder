import { Box, Skeleton } from "@mui/material";
import React from "react";

const AttractionAddressSkeleton = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
      <Skeleton variant="text" width={"50%"} />
      <Skeleton variant="text" width={"30%"} />
      <Skeleton variant="text" width={"30%"} />
    </Box>
  );
};

export default AttractionAddressSkeleton;
