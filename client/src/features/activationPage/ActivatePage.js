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
import { useStyles } from "./ActivatePage.styles";
import { useParams } from "react-router-dom";
import LandingPageHeroImage from "../../images/LandingPage.jpg";

export default function ActivatePage() {
  let classes = useStyles();
  let { token } = useParams();

  return (
    <div className={classes.ActivatePage}>
      <TwoRowsLayout>
        <Row>
          <div className={classes.TopRow}>
            <div
              style={{ backgroundImage: `url(${LandingPageHeroImage})` }}
              className={classes.HeroImage}
            >
              <Typography className={classes.Header} variant="h5">
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
                <Typography className={classes.SubHeader} color="textSecondary">
                  Click below to activate to start ordering!
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="primary" size="large">
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
