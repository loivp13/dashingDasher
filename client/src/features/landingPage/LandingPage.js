import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./LandingPage.styles";
import Form from "./components/Form/Form";

//HOOKS
import useAuthentication from "../../hooks/useAuthentication";

//SLICES
import { useSelector } from "react-redux";
import { selectUser } from "../../app/users/userSlice";

//IMAGES
import SignupHeroImage from "../../images/signUpPage.jpg";
import LandingPageHeroImage from "../../images/LandingPage.jpg";
import ForgotPwHeroImage from "../../images/forgotPwPage.jpg";

export default function LandingPage() {
  const classes = useStyles();

  let user = useSelector(selectUser);

  //State
  let [curView, setCurView] = useState("signin");

  //Hooks
  let { handleAuthorizedUser } = useAuthentication(user);

  handleAuthorizedUser(user);
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
        <Form curView={curView} setCurView={setCurView}></Form>
      </Grid>
    </Grid>
  );
}
