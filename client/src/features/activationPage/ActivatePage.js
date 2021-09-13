import React from "react";
import { useStyles } from "./ActivatePage.styles";

export default function ActivatePage({
  match: {
    params: { token },
  },
}) {
  let classes = useStyles();

  return <div className={classes.ActivatePage}></div>;
}
