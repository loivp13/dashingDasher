import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import LandingPageHeroImage from "../../images/LandingHero.png";
import { FormControl, InputLabel, Button } from "@material-ui/core";
import useStyles from "./LandingPage.styles";

export default function LandingPage() {
  const classes = useStyles();
  let [curView, setCurView] = useState("signin");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleForgotPwClick = () => {
    setCurView("forgotPw");
  };
  const handleSignUpClick = () => {
    setCurView("signup");
  };
  return (
    <Grid container className={classes.landingPageRoot}>
      <Grid className={classes.aboveTheFold} item xs={12}>
        <div
          style={{ backgroundImage: `url(${LandingPageHeroImage})` }}
          className={classes.backgroundImage}
        ></div>
        <Grid item className={classes.header}>
          <header>Dashing Dasher</header>
        </Grid>
      </Grid>
      <Grid container className={classes.formContainer}>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          noValidate
          autoComplete="off"
        >
          <FormControl>
            <InputLabel htmlFor="signin_username">Username</InputLabel>
            <Input
              id="siginin_username"
              type="text"
              placeholder="username"
              inputProps={{ "aria-label": "enter your username" }}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="signin_password">Password</InputLabel>
            <Input
              type="password"
              placeholder="password"
              inputProps={{ "aria-label": "enter your password" }}
            />
          </FormControl>
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
          <Grid className={classes.buttons} container>
            <Button onClick={handleSignUpClick}>Sign Up</Button>
            <Button onClick={handleForgotPwClick}>Forgot Password</Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
