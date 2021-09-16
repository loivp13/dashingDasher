import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LeftAlignLayout from "../../layout/LeftAlignLayout/LeftAlign.Layout";
import Slider from "../../global/components/Slider";
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
      <LeftAlignLayout>
        <Slider sizes={{ width: "calc(100vw - 1rem)", height: "auto" }}>
          <CuisineQuickSelect></CuisineQuickSelect>
        </Slider>
      </LeftAlignLayout>
    </div>
  );
}
