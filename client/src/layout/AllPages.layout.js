import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  allPagesRoot: {
    minHeight: "100vh",
  },
}));
export default function AllPages({ children }) {
  let classes = useStyles();
  return <div className={classes.allPagesRoot}>{children}</div>;
}
