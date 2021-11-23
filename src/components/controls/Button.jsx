import React from "react";
/* import {  as MuiButton, makeStyles } from "@material-ui/core"; */
import MuiButton from "@mui/material/Button";

/* const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
})); */

const Button = (props) => {
  const { text, size, color, variant, onClick, ...other } = props;
  /*  const classes = useStyles(); */

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "small"}
      color={color || "primary"}
      onClick={onClick || null}
      {...other}
      /* classes={{ root: classes.root, label: classes.label }} */
    >
      {text}
    </MuiButton>
  );
};

export default Button;
