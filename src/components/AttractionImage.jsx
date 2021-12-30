import { Skeleton } from "@mui/material";
import React from "react";

const AttractionImage = ({ data, name, loading }) => {
  return (
    <>
      {!loading ? (
        <img
          src={data.preview.source}
          width={"100%"}
          style={{ maxHeight: "40vh" }}
          alt={name}
        />
      ) : (
        <Skeleton variant="rectangular" width={"100%"} height={"30vh"} />
      )}
    </>
  );
};

export default AttractionImage;
