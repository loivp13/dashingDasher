import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => {
  return {
    Slider: {
      overflowX: "scroll",
      overflowY: "hidden",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey",
      },
    },
  };
});
