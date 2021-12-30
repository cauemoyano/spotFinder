import { Skeleton } from "@mui/material";
import React from "react";

const TitleSkeleton = () => {
  return (
    <Skeleton
      variant="text"
      width={"70%"}
      height={"5vh"}
      sx={{ margin: "auto", marginBottom: "1rem" }}
    ></Skeleton>
  );
};

export default TitleSkeleton;
