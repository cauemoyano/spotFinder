import React from "react";
import { TextField } from "@material-ui/core";

const InputText = (props) => {
  const { text, size, color, variant, onChange, ...other } = props;
  return (
    <form noValidate autoComplete="off">
      <TextField
        autoFocus={true}
        label="City Name"
        size={size || "small"}
        color={color || "primary"}
        onChange={onChange || null}
        aria-describedby="city name input"
        id="city-search-input"
        inputProps={{
          autoComplete: "new-password",
        }}
        {...other}
      />
    </form>
  );
};

export default InputText;
