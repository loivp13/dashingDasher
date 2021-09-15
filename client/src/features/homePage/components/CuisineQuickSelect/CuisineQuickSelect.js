import React from "react";
import { useStyles } from "./CuisineQuickSelect.styles";
import { Grid, IconButton } from "@material-ui/core";

import { ReactComponent as DonutIcon } from "../../../../images/DonutIcon.svg";

export default function CuisineQuickSelect() {
  let classes = useStyles();

  return (
    <div className={classes.CuisineQuickSelect}>
      <Grid container xs="12">
        <Grid item xs="12"></Grid>
      </Grid>
    </div>
  );
}
