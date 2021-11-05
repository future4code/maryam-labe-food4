import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToSearch } from "../routes/coordinator";

const useUnprotectedPage = () => {
  const history = useHistory();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToSearch(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
