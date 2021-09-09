import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  form: {
    margin: "0 auto 0 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  submitButton: {
    marginTop: "1rem",
  },
  header: {
    fontSize: "1.5rem",
  },
}));

export default useStyles;
