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

const SingleComment = ({ userName, body, date }) => {
  const styles = useStyles();

  const renderDate = (d) => {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}/${month}/${year.toString().slice(2)}`;
  };
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
          <span>{renderDate(date)}</span> <span>{userName} said:</span> {body}
        </Typography>
      </Box>
    </Box>
  );
};

export default SingleComment;
