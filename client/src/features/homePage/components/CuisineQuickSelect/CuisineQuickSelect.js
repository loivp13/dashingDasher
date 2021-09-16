import React from "react";
import { useStyles } from "./CuisineQuickSelect.styles";
import { Grid, Typography } from "@material-ui/core";

import DonutIcon from "../../../../images/DonutIcon.svg";
import SpaghettiIcon from "../../../../images/SpaghettiIcon.svg";
import TacoIcon from "../../../../images/TacoIcon.svg";
import BurgerIcon from "../../../../images/BurgerIcon.svg";
import SushiIcon from "../../../../images/SushiIcon.svg";
import BreakfastIcon from "../../../../images/BreakfastIcon.svg";
import SteakIcon from "../../../../images/SteakIcon.svg";
import SeafoodIcon from "../../../../images/SeafoodIcon.svg";

export default function CuisineQuickSelect() {
  let classes = useStyles();

  return (
    <Grid
      classes={{
        root: classes.CuisineQuickSelect,
      }}
      wrap="nowrap"
      container
      spacing={2}
      justifyContent={"space-around"}
    >
      <Grid item alignItems={"center"} justifyContent={"center"} container>
        <img
          className={classes.IconImages}
          src={TacoIcon}
          alt="Mexican Quick Filter Button"
        />
        <Typography variant={"body2"}>Mexican</Typography>
      </Grid>
      <Grid alignItems={"center"} item justifyContent={"center"} container>
        <img
          className={classes.IconImages}
          src={SeafoodIcon}
          alt="Seafood Quick Filter Button"
        />
        <Typography variant={"body2"}>Seafood</Typography>
      </Grid>
      <Grid alignItems={"center"} item justifyContent={"center"} container>
        <img
          className={classes.IconImages}
          src={SteakIcon}
          alt="Steak Quick Filter Button"
        />
        <Typography variant={"body2"}>Steak</Typography>
      </Grid>
      <Grid justifyContent={"center"} alignItems={"center"} item container>
        <img
          className={classes.IconImages}
          src={BurgerIcon}
          alt="American Quick Filter Button"
        />
        <Typography variant={"body2"}>American</Typography>
      </Grid>
      <Grid alignItems={"center"} item justifyContent={"center"} container>
        <img
          className={classes.IconImages}
          src={BreakfastIcon}
          alt="BreakfastIcon Quick Filter Button"
        />
        <Typography variant={"body2"}>Breakfast</Typography>
      </Grid>
      <Grid justifyContent={"center"} container alignItems={"center"} item>
        <img
          className={classes.IconImages}
          src={SushiIcon}
          alt="Japanese Quick Filter Button"
        />
        <Typography variant={"body2"}>Japanese</Typography>
      </Grid>
      <Grid alignItems={"center"} item justifyContent={"center"} container>
        <img
          className={classes.IconImages}
          src={SpaghettiIcon}
          alt="Italian Quick Filter Button"
        />
        <Typography variant={"body2"}>Italian</Typography>
      </Grid>
      <Grid alignItems={"center"} item justifyContent={"center"} container>
        <img
          className={classes.IconImages}
          src={DonutIcon}
          alt="Dessert Quick Filter Button"
        />
        <Typography variant={"body2"}>Dessert</Typography>
      </Grid>
    </Grid>
  );
}
