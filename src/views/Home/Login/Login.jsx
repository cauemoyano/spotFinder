import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Controls from "../../../components/controls/controls";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import CustomInput from "../../../components/form/CustomInput";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "clamp(250px, 15vw, 350px)",
    },
  },
}));

const Login = ({ setShowAuthPage }) => {
  const { control, handleSubmit, errors } = useForm();
  const [hasError, setHasError] = useState(false);

  const onSubmit = async (data) => {
    console.log(data, errors);
  };
  const onError = (errors, e) => setHasError(errors);

  const loginStyle = useStyles();
  return (
    <Container maxWidth="xl" sx={{ minWidth: "300px" }}>
      <Typography variant="h3">Login</Typography>
      <Box
        component="form"
        className={loginStyle.form}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <IconButton
          sx={{ position: "absolute", top: "-15%", right: "-25%" }}
          color="error"
          size="small"
          variant="contained"
          onClick={() => setShowAuthPage(null)}
        >
          <CancelIcon fontSize="large" />
        </IconButton>
        <CustomInput
          control={control}
          hasError={hasError}
          name={"email"}
          type={"text"}
          rules={{
            required: {
              value: true,
              message: "Please enter a valid email address",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          }}
          label={"Email"}
        />
        <CustomInput
          control={control}
          hasError={hasError}
          name={"password"}
          type={"password"}
          rules={{
            required: {
              value: true,
              message: "Please enter a password at least 6 characters long",
            },
            minLength: {
              value: 6,
              message: "Please enter a password at least 6 characters long",
            },
          }}
          label={"Password"}
        />

        <Controls.Button
          type="submit"
          size="medium"
          sx={{ mt: 3, mb: 3 }}
          text="Sign in"
        />
      </Box>
    </Container>
  );
};

export default Login;
