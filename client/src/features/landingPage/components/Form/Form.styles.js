import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  form: {
    margin: "0 auto 0 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    marginTop: "1rem",
  },
}));

export default useStyles;
