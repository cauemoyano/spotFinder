import { TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#66FCF1",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#66FCF1",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#C5C6C7",
    },
    "&:hover fieldset": {
      borderColor: "#C5C6C7",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#66FCF1",
    },
  },
});

const CustomTextField = React.forwardRef(
  ({ error = false, helperText, label, type, ...field }, ref) => {
    return (
      <>
        {error ? (
          <StyledTextField
            error
            margin="normal"
            label={label}
            type={type}
            {...field}
            variant="outlined"
            helperText={helperText}
            ref={ref}
          />
        ) : (
          <StyledTextField
            margin="normal"
            label={label}
            type={type}
            {...field}
            variant="outlined"
            ref={ref}
          />
        )}
      </>
    );
  }
);

export default CustomTextField;
