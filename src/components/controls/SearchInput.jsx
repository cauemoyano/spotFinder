import React, { Component } from "react";

import Controls from "./controls";

import { fetchData } from "../../utils/fetchData";

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = { value: "", suggestions: null };
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.state.value);
  }
  handleChange = (e) => {
    const checkValueLength = () => {
      if (this.state.value.length > 2) {
        console.log(this.state.value);
        fetchData(this.state.value).then((data) =>
          this.setState({
            ...this.state,
            suggestions: data,
          })
        );
      }
    };
    this.setState({ ...this.state, value: e.target.value }, checkValueLength);
  };

  render() {
    return (
      <React.Fragment>
        <Controls.InputText
          innerRef={this.inputRef}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.state.value}
        </Controls.InputText>
        <Controls.Selector
          currentValue={this.state.value}
          componentRef={this.inputRef.current}
          suggestions={this.state.suggestions}
        />
      </React.Fragment>
    );
  }
}
