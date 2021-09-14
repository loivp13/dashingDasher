import React, { useState } from "react";
import TwoRowsLayout from "../../layout/TwoRowsLayout/TwoRows.Layout";
import Row from "../../layout/TwoRowsLayout/Row";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  FormControl,
  TextField,
} from "@material-ui/core";
import {
  selectNewErrorMessage,
  selectSuccessMessage,
  setNewPwAsync,
} from "../../app/users/userSlice";
import { useStyles } from "./ForgotPwPage.styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useBackToHome } from "../../hooks/useBackToHome";
import LandingPageHeroImage from "../../images/LandingPage.jpg";

export default function ForgotPwPage() {
  let classes = useStyles();
  //HOOKS
  let dispatch = useDispatch();
  let handleBackToHome = useBackToHome();
  let { token } = useParams();
  let history = useHistory();

  //STATE
  let newErrorMessage = useSelector(selectNewErrorMessage);
  let newSuccessMessage = useSelector(selectSuccessMessage);
  const [newPw, setNewPw] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const validatePw = () => {
    let errors = [];
    if (newPw.length < 6) {
      errors.push("Password must be 6 characters");
    }
    return errors;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let errors = validatePw(newPw);
    if (errors.length > 0) {
      setFormErrors(errors[0]);
    } else {
      dispatch(setNewPwAsync(newPw, token));
      setFormErrors("");
    }
  };
  const handleOnChange = (e) => {
    setNewPw(e.target.value);
  };

  return (
    <div className={classes.ForgotPwPage}>
      <TwoRowsLayout>
        <Row>
          <div className={classes.TopRow}>
            <div
              style={{ backgroundImage: `url(${LandingPageHeroImage})` }}
              className={classes.HeroImage}
            >
              <Typography
                onClick={handleBackToHome}
                className={classes.Header}
                variant="h5"
              >
                Dashing Dasher
              </Typography>
            </div>
          </div>
        </Row>
        <Row>
          <div className={classes.BotRow}>
            <Card className={classes.Card}>
              <CardContent>
                <Typography
                  className={classes.Title}
                  color="textSecondary"
                  gutterBottom
                  variant="h4"
                >
                  Reset your password
                </Typography>
                {newErrorMessage ? (
                  <Typography
                    className={classes.ErrorMessage}
                    color="error"
                    variant="subtitle1"
                  >
                    {newErrorMessage}
                  </Typography>
                ) : (
                  ""
                )}
                {newSuccessMessage ? (
                  <Typography
                    className={classes.SuccessMessage}
                    color="textSecondary"
                    variant="subtitle1"
                  >
                    {newSuccessMessage}
                  </Typography>
                ) : (
                  ""
                )}
                <Typography className={classes.SubHeader} color="textSecondary">
                  Enter your new password
                </Typography>
                <form className={classes.Form}>
                  <FormControl>
                    <TextField
                      onChange={handleOnChange}
                      value={newPw}
                      error={formErrors ? true : false}
                      id="set_new_password"
                      label="Set New Password"
                      type="password"
                      placeholder="password"
                      required={true}
                      helperText={
                        formErrors ? formErrors : "Enter your password."
                      }
                    ></TextField>
                  </FormControl>
                </form>
              </CardContent>

              <CardActions>
                <Button
                  onClick={handleOnSubmit}
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  Reset
                </Button>
              </CardActions>
            </Card>
          </div>
        </Row>
      </TwoRowsLayout>
    </div>
  );
}
