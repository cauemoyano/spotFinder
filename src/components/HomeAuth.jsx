import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import React from "react";
import Controls from "./controls/controls";
import axios from "axios";
import { connect } from "react-redux";
import { setUserInfo } from "../redux/User/user.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "absolute",
    top: "5vh",
    right: "5vw",
    width: "100%",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      width: "clamp(250px, 15vw, 350px)",
    },
  },
}));

const HomeAuth = ({ setShowAuthPage, user, setUser }) => {
  const classes = useStyles();

  const handleLogout = async () => {
    await axios.post("/api/v1/auth/logout");
    setUser(null);
  };

  return (
    <Box className={classes.root}>
      {user ? (
        <Controls.Button size="medium" text="LOGOUT" onClick={handleLogout} />
      ) : (
        <>
          <Controls.Button
            size="medium"
            text="LOGIN"
            onClick={() => setShowAuthPage("login")}
          />
          <Controls.Button
            size="medium"
            text="REGISTER"
            onClick={() => setShowAuthPage("register")}
          />
        </>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch(setUserInfo(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeAuth);
