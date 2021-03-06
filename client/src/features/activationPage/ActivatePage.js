import React from "react";
import TwoRowsLayout from "../../layout/TwoRowsLayout/TwoRows.Layout";
import Row from "../../layout/TwoRowsLayout/Row";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import {
  activationAsync,
  selectNewErrorMessage,
} from "../../app/users/userSlice";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./ActivatePage.styles";
import { useParams } from "react-router-dom";
import { useBackToHome } from "../../hooks/useBackToHome";
import LandingPageHeroImage from "../../images/LandingPage.jpg";

export default function ActivatePage() {
  //HOOKS
  let dispatch = useDispatch();
  let history = useHistory();
  let handleBackToHome = useBackToHome();
  let classes = useStyles();
  let { token } = useParams();
  let newErrorMessage = useSelector(selectNewErrorMessage);

  const handleOnClick = () => {
    dispatch(activationAsync(token)).then((isSuccessful) => {
      if (isSuccessful) {
        history.push("/home");
      } else {
        return;
      }
    });
  };

  return (
    <div className={classes.ActivatePage}>
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
                  Ready to activate your account?
                </Typography>
                {newErrorMessage ? (
                  <Typography
                    className={classes.ErrorMessage}
                    color="secondary"
                    variant="subtitle1"
                  >
                    {newErrorMessage}
                  </Typography>
                ) : (
                  ""
                )}
                <Typography className={classes.SubHeader} color="textSecondary">
                  Click below to activate your account and start ordering!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={handleOnClick}
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  Activate
                </Button>
              </CardActions>
            </Card>
          </div>
        </Row>
      </TwoRowsLayout>
    </div>
  );
}
