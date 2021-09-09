import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import LandingPageHeroImage from "../../images/LandingHero.png";
import ForgotPwHeroImage from "../../images/forgotPwPage.jpg";
import SignupHeroImage from "../../images/signUpPage.jpg";
import { Button } from "@material-ui/core";
import useStyles from "./LandingPage.styles";
import FormItems from "./components/FormItems";
import FormNavigation from "./components/FormNavigation";
import cloneDeep from "lodash/cloneDeep";

export default function LandingPage() {
  const classes = useStyles();
  let [curView, setCurView] = useState("signin");
  let [errorInfo, setErrorInfo] = useState({
    signin: {},
    signup: {},
    forgotPw: {},
  });
  let [formInfo, setFormInfo] = useState({
    signin: {
      username: "",
      password: "",
    },
    signup: {
      username: "",
      password: "",
      email: "",
    },
    forgotPw: {
      email: "",
    },
  });
  const isValidateForm = (cloneErrorInfo) => {
    let isValid = true;
    for (let key in formInfo[curView]) {
      if (!formInfo[curView][key]) {
        cloneErrorInfo[curView][key] = `${key} is required`;
        isValid = false;
      }
    }
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let cloneErrorInfo = cloneDeep(errorInfo);
    switch (curView) {
      case "signin":
        if (isValidateForm(cloneErrorInfo)) {
          console.log("send http");
        } else {
          setErrorInfo(cloneErrorInfo);
        }
        break;
      case "signup":
        if (isValidateForm(cloneErrorInfo)) {
          console.log("send http");
        } else {
          setErrorInfo(cloneErrorInfo);
        }
        break;
      case "forgotPw":
        if (isValidateForm(cloneErrorInfo)) {
          console.log("send http");
        } else {
          setErrorInfo(cloneErrorInfo);
        }
        break;
    }
  };
  const handleOnFormChange = (label, value) => {
    let cloneFormInfo = cloneDeep(formInfo);
    cloneFormInfo[curView][label] = value;
    setFormInfo(cloneFormInfo);
    setErrorInfo({
      signin: {},
      signup: {},
      forgotPw: {},
    });
  };
  const handleForgotPwClick = () => {
    setCurView("forgotPw");
  };
  const handleSignUpClick = () => {
    setCurView("signup");
  };
  const handleSignInClick = () => {
    setCurView("signin");
  };
  const renderOrderCss = (type) => {
    //ENABLE FLIPPING ORDER ON SIGNUP
    // if (curView === "signup" && type === "img") {
    //   return { order: "2" };
    // } else {
    //   return { order: "1" };
    // }
    return { order: "1" };
  };
  const renderHeroImage = () => {
    switch (curView) {
      case "signin":
        return LandingPageHeroImage;
      case "signup":
        return SignupHeroImage;
      case "forgotPw":
        return ForgotPwHeroImage;
    }
  };
  const renderHeaderCss = () => {
    switch (curView) {
      case "signin":
        return {
          right: "10%",
          color: "black",
          textAlign: "end",
        };
      case "signup":
        return {
          left: "10%",
          color: "white",
          textAlign: "start",
        };
      case "forgotPw":
        return {
          left: "10%",
          color: "white",
          textAlign: "start",
        };
    }
  };
  return (
    <Grid container className={classes.landingPageRoot}>
      <Grid
        style={renderOrderCss("img")}
        className={classes.aboveTheFold}
        item
        xs={12}
      >
        <div
          style={{ backgroundImage: `url(${renderHeroImage()})` }}
          className={classes.backgroundImage}
        ></div>
        <Grid style={renderHeaderCss()} item className={classes.header}>
          <header>Dashing Dasher</header>
        </Grid>
      </Grid>
      <Grid
        style={renderOrderCss("form")}
        container
        className={classes.formContainer}
      >
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          noValidate
          autoComplete="off"
        >
          <FormItems
            errorInfo={errorInfo}
            handleOnFormChange={handleOnFormChange}
            curView={curView}
          ></FormItems>
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            {curView === "signin" ? "login" : "submit"}
          </Button>
          <FormNavigation
            curView={curView}
            handleSignUpClick={handleSignUpClick}
            handleForgotPwClick={handleForgotPwClick}
            handleSignInClick={handleSignInClick}
          ></FormNavigation>
        </form>
      </Grid>
    </Grid>
  );
}
