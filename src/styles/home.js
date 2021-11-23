export const homeStyle = {
  root: {
    minHeight: "100vh",
    position: "relative",
    padding: 0,
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(0,-50%)",
    opacity: 0,
    "&.active": {
      zIndex: 2,
      transform: "translate(-50%, -50%)",
      transition: "transform .6s, opacity .6s",
      opacity: 1,
    },
  },
  svg: {
    background:
      "-webkit-linear-gradient(0deg, rgba(189, 195, 199, 0.85), rgba(44, 62, 80, 0.85)), url('./images/rsz_boston-bg_1.jpg')",
    background:
      "linear-gradient(0deg, rgba(189, 195, 199, 0.85), rgba(44, 62, 80, 0.85)), url('./images/rsz_boston-bg_1.jpg')",
    backgroundSize: "cover",
    display: "block",
    width: "100%",
    height: "100vh",
  },
  h1: {
    fontFamily: "'Dancing Script', cursive !important;",
  },
  subtitle: {
    fontWeight: "500",
    color: "#C5C6C7",
    letterSpacing: "1px",
  },
  loginWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  loginContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -60%)",
    opacity: 0,
    color: "white",
    transition: "transform .6s .2s, opacity .6s .2s",
    "&.active": {
      zIndex: 4,
      transform: "translate(-50%, -50%)",
      opacity: 1,
    },
  },
  registerContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-60%, -50%)",
    opacity: 0,
    color: "white",
    transition: "transform .6s .2s, opacity .6s .2s",
    "&.active": {
      zIndex: 4,
      transform: "translate(-50%, -50%)",
      opacity: 1,
    },
  },
};
