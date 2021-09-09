import React, { useState } from "react";
import { Button } from "@material-ui/core";
import FormItems from "./FormItems";
import FormNavigation from "./FormNavigation";
import cloneDeep from "lodash/cloneDeep";
import useStyles from "./Form.styles";

export default function Form({ curView, setCurView }) {
  let classes = useStyles();
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
  const handleNavigationalClick = (view) => {
    setCurView(view);
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
  return (
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
        handleNavigationalClick={handleNavigationalClick}
        handleSignUpClick={handleSignUpClick}
        handleForgotPwClick={handleForgotPwClick}
        handleSignInClick={handleSignInClick}
      ></FormNavigation>
    </form>
  );
}
