import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CuisineQuickSelect from "./components/CuisineQuickSelect/CuisineQuickSelect";

import { selectUser } from "../../app/users/userSlice";
import { useSelector } from "react-redux";
import useAuthentication from "../../hooks/useAuthentication";
import { useStyles } from "./HomePage.styles";

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
      <CuisineQuickSelect></CuisineQuickSelect>
    </div>
  );
}
