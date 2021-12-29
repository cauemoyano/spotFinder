import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { responsiveFontSizes } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Map from "../views/Map/Map";
import Home from "../views/Home/Home";

let theme = createTheme({
  palette: {
    primary: {
      main: "#66FCF1",
      dark: "#45A29E",
    },
    secondary: {
      main: "#EC317F",
    },
    dark: {
      main: "#0B0C10",
      contrastText: "#fff",
    },
    primaryDarker: {
      main: "#45A29E",
    },
    darkBlue: {
      main: "#1F2833",
    },
    gray: {
      main: "#C5C6C7",
    },
  },
  darkBlue: {
    main: "#1F2833",
  },
  primaryDarker: {
    main: "#45A29E",
  },
  dark: {
    main: "#0B0C10",
  },
  light: {
    main: "#C5C6C7",
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={Map} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
