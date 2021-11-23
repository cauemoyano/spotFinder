import { Typography } from "@material-ui/core";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Controls from "../../../components/controls/controls";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import CustomInput from "../../../components/form/CustomInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { connect } from "react-redux";
import { setUserInfo } from "../../../redux/User/user.actions";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must have at least two characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(
      6,
      "Password must be at least 6 characters and contains at least one number"
    )
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
      "Password must be at least 6 characters and contains at least one number"
    ),
  passwordConfirmation: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const formOptions = { resolver: yupResolver(validationSchema) };

const Registration = ({ setShowAuthPage, setUser }) => {
  const { control, handleSubmit, reset } = useForm(formOptions);
  const [hasError, setHasError] = useState(false);

  const onSubmit = async (data) => {
    console.log("submitting");
    if (!data) return;
    try {
      await axios.post("/api/v1/auth/register", data);
      const user = await axios.get("/api/v1/users/");
      reset();
      setUser(user.data);
      setShowAuthPage(null);
    } catch (err) {
      if (err.response?.data.message === "Invalid email") {
        setHasError({ email: { message: "Invalid email" } });
      }
      console.log(err);
    }
  };
  const onError = (errors) => setHasError(errors);

  return (
    <Container maxWidth="xl" sx={{ minWidth: "300px" }}>
      <Typography variant="h3">Register</Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        onSubmit={handleSubmit(onSubmit, onError)}
        id="registration-form"
      >
        <IconButton
          sx={{ position: "absolute", top: "-15%", right: "-25%" }}
          color="error"
          size="large"
          variant="contained"
          onClick={() => setShowAuthPage(null)}
        >
          <CancelIcon fontSize="large" />
        </IconButton>
        <CustomInput
          control={control}
          hasError={hasError}
          name={"name"}
          type={"text"}
          label={"Full Name"}
        />
        <CustomInput
          control={control}
          hasError={hasError}
          name={"email"}
          type={"text"}
          label={"Email"}
        />
        <CustomInput
          control={control}
          hasError={hasError}
          name={"password"}
          type={"password"}
          label={"Password"}
        />
        <CustomInput
          control={control}
          hasError={hasError}
          name={"passwordConfirmation"}
          type={"password"}
          label={"Confirm Password"}
        />
        <Controls.Button
          type="submit"
          size="medium"
          variant="contained"
          sx={{ mt: 3, mb: 3 }}
          text="Register"
        />
      </Box>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch(setUserInfo(data)),
  };
};

export default connect(null, mapDispatchToProps)(Registration);
