import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => {
  return {
    ActivatePage: {
      minHeight: "100vh",
      width: "100%",
    },
    TopRow: {
      height: "40vh",
      width: "100%",
    },
    Header: {
      fontWeight: "bold",
      height: "100%",
      display: "flex",
      marginTop: "1rem",
      marginLeft: "1rem",
    },
    BotRow: {
      height: "60vh",
      width: "100%",
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
      justifyContent: "space-around",
      height: "100%",
    },
    Title: {
      textAlign: "center",
    },
    SubHeader: {
      textAlign: "center",
    },
  };
});
