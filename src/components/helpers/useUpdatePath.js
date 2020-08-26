import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../services/context/GlobalState";

export const useUpdatePath = () => {
  const { env, updatePath } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    if (env.path === null) {
      updatePath(window.location.pathname.split("/")[1]);
    }
    return history.listen((location) => {
      updatePath(window.location.pathname.split("/")[1]);
    });
  }, [env, updatePath, history]);
};
