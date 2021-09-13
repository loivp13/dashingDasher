import React from "react";
import { useStyles } from "./Row.styles";
import { Grid } from "@material-ui/core";

export default function Row({ dimension, children }) {
  let classes = useStyles();

  let xs, md, lg, xl;
  if (dimension) {
    xs = dimension.xs;
    md = dimension.md;
    lg = dimension.lg;
    xl = dimension.xl;
  }

  return (
    <Grid item className={classes.Row} item xs={xs} md={md} lg={lg} xl={xl}>
      {children}
    </Grid>
  );
}
