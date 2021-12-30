import { Box, Skeleton } from "@mui/material";
import React from "react";

const CommentsSkeleton = () => {
  return (
    <Box mx={3} mb={8}>
      <Skeleton
        variant="text"
        height="30px"
        width="30%"
        sx={{ marginBottom: "1rem" }}
      />

      <Skeleton variant="text" height="20px" width="25%" />
    </Box>
  );
};

export default CommentsSkeleton;
