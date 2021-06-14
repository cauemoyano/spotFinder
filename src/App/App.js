import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import Map from "../pages/Map";
import Home from "../pages/Home";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div>
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
