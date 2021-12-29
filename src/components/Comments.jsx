import { Box, Typography } from "@mui/material";
import React from "react";

import SingleComment from "./SingleComment";

const Comments = () => {
  return (
    <Box px={3}>
      <Typography variant="h6">What other people said:</Typography>
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </Box>
  );
};

export default Comments;
