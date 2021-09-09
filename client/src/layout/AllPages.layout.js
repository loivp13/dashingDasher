import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  allPagesRoot: {
    minHeight: "100vh",
    maxWidth: "1020px",
    margin: "0 auto 0 auto",
  },
}));
export default function AllPages({ children }) {
  let classes = useStyles();
  return <div className={classes.allPagesRoot}>{children}</div>;
}
