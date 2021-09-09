import React from "react";
import styles from "./FormNavigation.styles";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./FormNavigation.styles";
import { v4 as uuidv4 } from "uuid";

export default function FormNavigation({
  handleSignUpClick,
  handleForgotPwClick,
  handleSignInClick,
  curView,
}) {
  let buttonsInfo = {
    signin: {
      content: "Sign In",
      action: handleSignInClick,
    },
    signup: {
      content: "Sign up",
      action: handleSignUpClick,
    },
    forgotPw: {
      content: "Forgot Password",
      action: handleForgotPwClick,
    },
  };
  let classes = useStyles();
  const renderFormNavButtons = () => {
    let result = [];

    for (let key in buttonsInfo) {
      let curButtonInfo = buttonsInfo[key];
      if (key !== curView) {
        result.push(
          <Button key={uuidv4()} onClick={curButtonInfo.action}>
            {curButtonInfo.content}
          </Button>
        );
      }
    }
    return result;
  };
  return (
    <Grid className={classes.buttonsGroup} container>
      {renderFormNavButtons()}
    </Grid>
  );
}
