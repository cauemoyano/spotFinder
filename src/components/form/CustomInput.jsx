import { makeStyles } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";
import CustomTextField from "../controls/CustomTextField";

const useStyles = makeStyles((theme) => {
  return {
    cssLabel: {
      color: "white",
    },

    cssOutlinedInput: {
      "&$cssFocused $notchedOutline": {
        borderColor: `${theme.palette.primary.main} !important`,
      },
    },

    cssFocused: {},

    notchedOutline: {
      borderWidth: "1px",
      borderColor: "white !important",
    },
  };
});

const CustomInput = ({
  control,
  hasError,
  name,
  rules = null,
  label,
  type,
}) => {
  const classes = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }) => (
        <>
          {hasError && hasError[name] ? (
            <CustomTextField
              error={true}
              helperText={hasError[name].message}
              label={label}
              type={type}
              {...field}
            />
          ) : (
            <CustomTextField label={label} type={type} {...field} />
          )}
        </>
      )}
    />
  );
};

export default CustomInput;
