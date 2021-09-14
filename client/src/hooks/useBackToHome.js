import { useHistory } from "react-router-dom";

export const useBackToHome = function () {
  const history = useHistory();
  const handleGoToHome = () => {
    history.push("/");
  };
  return handleGoToHome;
};
