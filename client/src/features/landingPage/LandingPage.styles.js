import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  landingPageRoot: {
    position: "relative",
    height: "100%",
    background: "radial-gradient(farthest-side,#dee6ea, #f2f7f8)",
  },
  aboveTheFold: {
    height: "45vh",
    width: " 100%",
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  header: {
    position: "absolute",
    top: "15%",
    fontSize: "2rem",
    fontWeight: "bold",
    width: "50%",
  },

  formContainer: {
    width: "100%",
    height: "55vh",
    borderTop: "1px solid dee6ea",
  },
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
