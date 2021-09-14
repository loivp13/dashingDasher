import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => {
  return {
    ForgotPwPage: {
      minHeight: "100vh",
      width: "100%",
    },
    TopRow: {
      height: "40vh",
      width: "100%",
    },
    ErrorMessage: {
      textAlign: "center",
    },
    SuccessMessage: {
      textAlign: "center",
      color: "green",
    },
    Header: {
      fontWeight: "bold",
      height: "100%",
      display: "flex",
      marginTop: "1rem",
      marginLeft: "1rem",
      cursor: "pointer",
    },
    Form: {
      display: "flex",
      justifyContent: "center",
    },
    BotRow: {
      height: "60vh",
      width: "100%",
      borderTop: "1px solid black",
    },
    HeroImage: {
      objectFit: "contain",
      height: "100%",
      width: "100%",
    },
    Card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
    },
    Title: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    SubHeader: {
      textAlign: "center",
      marginBottom: "3rem",
    },
  };
});
