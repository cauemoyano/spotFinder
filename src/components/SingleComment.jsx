import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  comment: {
    "&>span:nth-child(1)": {
      color: "#8D8D8D",
      fontWeight: "600",
    },
    "&>span:nth-child(2)": {
      fontWeight: "700",
    },
  },
}));

const SingleComment = () => {
  const styles = useStyles();
  return (
    <Box py={1}>
      <Box display="flex">
        <Box
          sx={{ width: "15%" }}
          mr={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ maxWidth: "50px", borderRadius: "100%" }} color="primary">
            <AccountCircleIcon fontSize="large" color="primaryDarker" />
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{ width: "85%" }}
          className={styles.comment}
        >
          <span>10/12/2021</span> <span>Bob said:</span> It’s a very nice place
          to visit and I'd highly recommend it.
        </Typography>
      </Box>
    </Box>
  );
};

export default SingleComment;
