import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import FormItems from "./FormItems";
import FormNavigation from "./FormNavigation";
import cloneDeep from "lodash/cloneDeep";
import useStyles from "./Form.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNewErrorMessage,
  selectSuccessMessage,
  loginAsync,
  removeErrorMessage,
  signUpAsync,
  addSuccessMessage,
  forgotPwAsync,
} from "../../../../app/users/userSlice";
import { useHistory } from "react-router-dom";

export default function Form({ curView, setCurView }) {
  const dispatch = useDispatch();
  let history = useHistory();
  let classes = useStyles();

  //STATES
  const newErrorMessage = useSelector(selectNewErrorMessage);
  const successMessage = useSelector(selectSuccessMessage);
  let [errorInfo, setErrorInfo] = useState({
    signin: {},
    signup: {},
    forgotPw: {},
  });
  let [formInfo, setFormInfo] = useState({
    signin: {
      email: "",
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

  const removeMessages = () => {
    if (newErrorMessage || successMessage) {
      dispatch(removeErrorMessage());
      dispatch(addSuccessMessage(""));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let cloneErrorInfo = cloneDeep(errorInfo);
    let { email, username, password } = formInfo[curView];
    switch (curView) {
      case "signin":
        if (isValidateForm(cloneErrorInfo)) {
          dispatch(loginAsync(email, password)).then((isSuccessful) => {
            console.log(isSuccessful);
            if (isSuccessful) {
              history.push("/home");
            } else {
            }
          });
        } else {
          setErrorInfo(cloneErrorInfo);
        }
        break;
      case "signup":
        if (isValidateForm(cloneErrorInfo)) {
          dispatch(signUpAsync(username, password, email));
        } else {
          setErrorInfo(cloneErrorInfo);
        }
        break;
      case "forgotPw":
        if (isValidateForm(cloneErrorInfo)) {
          dispatch(forgotPwAsync(email));
        } else {
          setErrorInfo(cloneErrorInfo);
        }
        break;
    }
  };
  const handleOnFormChange = (label, value) => {
    removeMessages();

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
  const renderHeader = () => {
    switch (curView) {
      case "signin":
        return "Sign In";
      case "signup":
        return "Sign up";
      case "forgotPw":
        return "Reset Password";
    }
  };

  useEffect(() => {
    removeMessages();
  }, [curView]);
  return (
    <form
      onSubmit={handleSubmit}
      className={classes.form}
      noValidate
      autoComplete="off"
    >
      <header className={classes.header}>{renderHeader()}</header>
      <div className={classes.newErrorMessage}>{newErrorMessage}</div>
      <div className={classes.successMessage}>{successMessage}</div>
      {successMessage ? (
        ""
      ) : (
        <FormItems
          formInfo={formInfo}
          errorInfo={errorInfo}
          handleOnFormChange={handleOnFormChange}
          curView={curView}
        ></FormItems>
      )}
      {successMessage ? (
        ""
      ) : (
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          {curView === "signin" ? "login" : "submit"}
        </Button>
      )}
      <FormNavigation
        curView={curView}
        handleNavigationalClick={handleNavigationalClick}
      ></FormNavigation>
    </form>
  );
}
