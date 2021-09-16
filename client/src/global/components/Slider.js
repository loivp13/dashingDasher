import React from "react";
import { useStyles } from "./Slider.styles";

export default function Slider({ sizes, children }) {
  let { height, width } = sizes;
  let classes = useStyles();
  return (
    <div style={{ height, width }} className={classes.Slider}>
      {children}
    </div>
  );
}
