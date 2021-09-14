import React from "react";
import { useHistory } from "react-router";

export default function useAuthentication(user) {
  let history = useHistory();
  const handleUnauthorizedUser = () => {
    if (!user) {
      history.push("/");
    }
  };
  const handleAuthorizedUser = () => {
    if (user) {
      history.push("/home");
    }
  };
  return { handleUnauthorizedUser, handleAuthorizedUser };
}
