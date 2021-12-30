import { Box, Skeleton } from "@mui/material";
import React from "react";

const UserCommentsSkeleton = () => {
  return (
    <Box mx={3} mb={10}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Skeleton variant="text" height="30px" width="30%" />
        <Skeleton variant="rectangular" height="30px" width="25%" />
      </Box>
      <Skeleton variant="text" height="20px" width="25%" />
    </Box>
  );
};

export default UserCommentsSkeleton;
