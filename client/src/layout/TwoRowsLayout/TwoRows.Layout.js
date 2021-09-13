import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((topHeight, bottomHeight) => {
  return {
    TwoRowLayout: {
      height: "100%",
      width: "100%",
    },
    TopRow: {
      height: `${topHeight}%`,
    },
    BottomRow: {
      height: `${bottomHeight ? bottomHeight : 100 - topHeight}%`,
    },
  };
});

export default function TwoRowsLayout({ topHeight, bottomHeight }) {
  let classes = useStyles(topHeight, bottomHeight);
  return (
    <div className={classes.TwoRowsLayout}>
      <div className={classes.TopRow}></div>
      <div className={classes.TopRow}></div>
    </div>
  );
}
