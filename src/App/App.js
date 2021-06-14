import "./App.css";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import Map from "../Map/Map";
import Home from "../pages/Home";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
