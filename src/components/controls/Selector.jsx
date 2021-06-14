import React, { Component } from "react";

import CustomPopper from "./CustomPopper";

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null, suggestions: null, open: false };
  }
  handleOpen() {
    if (this.suggestions === null) return;
    this.setState({ ...this.state, open: true });
  }
  handleClose() {
    this.setState({ ...this.state, open: false });
  }
  componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;
    if (this.props.currentValue.length < 3) {
      this.handleClose();
      return;
    }
    this.setState(
      {
        suggestions: this.props.suggestions,
        anchorEl: this.props.componentRef,
      },
      this.handleOpen
    );
  }

  render() {
    return (
      <CustomPopper
        open={this.state.open}
        anchorEl={this.state.anchorEl}
        currentValue={this.props.currentValue}
        suggestions={this.state.suggestions}
      />
    );
  }
}
