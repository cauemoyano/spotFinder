import React, { Component } from "react";

import { connect } from "react-redux";
import { setMapData } from "../../redux/Map/map.actions";

import { useHistory } from "react-router-dom";

import { fetchData } from "../../utils/fetchData";

import Autocomplete from "@mui/material/Autocomplete";
import CustomTextField from "./CustomTextField";
import { makeStyles } from "@material-ui/core";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", suggestions: [] };
    this.inputRef = React.createRef();
  }

  handleChange = (e) => {
    const checkValueLength = () => {
      if (this.state.value.length > 2) {
        fetchData(
          `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_TOKEN}&q=${this.state.value}&limit=5&tag=place:city`
        ).then((data) => {
          if (data.error) return;
          this.setState({
            ...this.state,
            suggestions: data,
          });
        });
      }
    };
    if (e) {
      this.setState({ ...this.state, value: e.target.value }, checkValueLength);
    }
  };

  render() {
    const { setMapData } = this.props;
    return (
      <React.Fragment>
        <SearchSuggest
          suggestions={this.state.suggestions}
          handleChange={this.handleChange}
          value={this.state.value}
          setData={setMapData}
        />
      </React.Fragment>
    );
  }
}
const useStyles = makeStyles({
  root: {
    background: "rgba( 165, 165, 165, 0.15 )",
    boxShadow: "0 4px 16px 0 rgba( 165, 165, 165, 0.2 )",
    backdropFilter: "blur( 5px )",
    WebkitDropFilter: "blur( 5px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
});

const SearchSuggest = ({ setData, handleChange, value, suggestions }) => {
  let history = useHistory();
  const styles = useStyles();

  const handleOption = (option) => {
    if (option["display_place"]) {
      if (option.address.name) {
        return `${option.address.name} - ${option.address.country}`;
      }
      return option["display_place"];
    }
    if (typeof option === "object") {
      return this.state.value;
    }
    return option;
  };

  const handleClick = (e) => {
    const city = e.target.innerText.split("-")[0].trim();
    const option = suggestions.find((sug) => sug["display_place"] === city);
    setData(option);
    history.push("/map");
  };

  return (
    <Autocomplete
      id="place suggest"
      options={suggestions}
      getOptionLabel={(option) => {
        return handleOption(option);
      }}
      onInputChange={handleChange}
      onChange={(e) => handleClick(e)}
      value={value}
      style={{ width: 300 }}
      renderInput={(fields) => (
        <CustomTextField
          {...fields}
          label="Select a city"
          className={styles.root}
        />
      )}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMapData: (payload) => dispatch(setMapData(payload)),
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
