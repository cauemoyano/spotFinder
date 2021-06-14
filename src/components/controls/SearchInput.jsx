import React, { Component } from "react";

import { connect } from "react-redux";
import { setMapData } from "../../redux/Map/map.actions";

import { useHistory } from "react-router-dom";

import { fetchData } from "../../utils/fetchData";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", suggestions: [] };
    this.inputRef = React.createRef();
  }

  handleChange = (e) => {
    const checkValueLength = () => {
      if (this.state.value.length > 2) {
        fetchData(this.state.value).then((data) => {
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

const SearchSuggest = ({ setData, handleChange, value, suggestions }) => {
  let history = useHistory();

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

  const handleClick = () => {
    setData(suggestions[0]);
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
      onChange={handleClick}
      value={value}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
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
