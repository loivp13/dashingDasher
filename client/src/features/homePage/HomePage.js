import React from "react";
import { useStyles } from "./HomePage.styles";
import Navbar from "./components/Navbar";
import { selectUser } from "../../app/users/userSlice";
import { useSelector } from "react-redux";
import useAuthentication from "../../hooks/useAuthentication";

export default function HomePage() {
  //HOOK
  let user = useSelector(selectUser);
  let { handleUnauthorizedUser } = useAuthentication(user);
  handleUnauthorizedUser();

  //CSS
  let classes = useStyles();
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
