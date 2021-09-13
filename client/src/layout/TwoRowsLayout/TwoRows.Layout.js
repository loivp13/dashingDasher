import React from "react";
import { useStyles } from "./TwoRows.styles";
import { Grid } from "@material-ui/core";

export default function TwoRowsLayout({ children }) {
  let classes = useStyles();

  return (
    <Grid direction={"column"} className={classes.TwoRow} container xs={12}>
      {children}
    </Grid>
  );
}
