import React from "react";
import { useStyles } from "./LeftAlign.styles";

export default function LeftAlignLayout({ children }) {
  let classes = useStyles();

  return <div className={classes.leftAlignlayout}>{children}</div>;
}
