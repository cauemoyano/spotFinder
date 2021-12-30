import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CitySelector from "../Home/CitySelector/CitySelector";
import HomeAuth from "../../components/HomeAuth";
import { homeStyle } from "../../styles/home";
import Login from "../Home/Login/Login";
import Registration from "../Home/Registration/Registration";
import Box from "@mui/material/Box";
import axios from "axios";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/User/user.actions";

const useStyles = makeStyles(homeStyle);

const Home = ({ setUser }) => {
  const homeStyle = useStyles();
  const [showAuthPage, setShowAuthPage] = useState(false);
  const wrapHomeRef = useRef();
  const loginRef = useRef();
  const registerRef = useRef();

  const manipulatePolygon = (show) => {
    const common = {
      targets: ".polymorph",
      easing: "easeOutQuad",
      duration: 600,
      loop: false,
    };

    if (show) {
      wrapHomeRef.current.classList.remove("active");
      if (show === "login") {
        loginRef.current.classList.add("active");
      }
      if (show === "register") {
        registerRef.current.classList.add("active");
      }

      anime({
        ...common,
        points: [{ value: "215,110 0,110 186,86 215,0" }],
      });
    } else {
      wrapHomeRef.current.classList.add("active");

      loginRef.current.classList.remove("active");

      registerRef.current.classList.remove("active");

      anime({
        ...common,
        points: [{ value: "215,110 0,110 0,0 215,0" }],
      });
    }
  };

  useEffect(() => {
    axios.get("/api/v1/users").then((res) => setUser(res.data));
  }, []);

  useEffect(() => {
    if (wrapHomeRef.current.classList.contains("active")) {
      manipulatePolygon(showAuthPage);
      return;
    }
    if (showAuthPage === "login") {
      loginRef.current.classList.add("active");
      registerRef.current.classList.remove("active");
      return;
    }
    if (showAuthPage === "register") {
      loginRef.current.classList.remove("active");
      registerRef.current.classList.add("active");
      return;
    }
    manipulatePolygon(showAuthPage);
  }, [showAuthPage]);

  return (
    <Container maxWidth="xl" disableGutters className={homeStyle.root}>
      <div
        id="wrap-cta"
        ref={wrapHomeRef}
        className={`${homeStyle.inputWrapper} active`}
      >
        <Typography variant="h1" color="primary" className={homeStyle.h1}>
          Spot Finder
        </Typography>
        <Typography
          variant="body1"
          className={homeStyle.subtitle}
          gutterBottom={true}
        >
          Find the best places to visit
        </Typography>
        <CitySelector />
      </div>
      {
        <svg
          className={homeStyle.svg}
          viewBox="0 0 215 110"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="bg" x="0" y="0" width="1" height="1">
              <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                href="/images/rsz_boston-bg_2.jpg"
                preserveAspectRatio="xMinYMin slice"
              />
            </pattern>
          </defs>
          <polygon
            className="polymorph"
            points="215,110 0,110 0,0 215,0"
            fill="url(#bg)"
          ></polygon>
        </svg>
      }
      <HomeAuth showAuthPage={showAuthPage} setShowAuthPage={setShowAuthPage} />
      <Box className={homeStyle.loginWrapper}>
        <Box ref={loginRef} className={`${homeStyle.loginContent}`}>
          <Login setShowAuthPage={setShowAuthPage} />
        </Box>
        <Box
          ref={registerRef}
          className={`${homeStyle.registerContent} auth-pages`}
        >
          <Registration setShowAuthPage={setShowAuthPage} />
        </Box>
      </Box>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch(setUserInfo(data)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
