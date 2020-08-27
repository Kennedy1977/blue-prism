import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../services/context/GlobalState";

export const TrackPath = () => {
  const { env, updatePath } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    if (env.path === null) {
      updatePath(window.location.pathname.split("/")[1]);
    }
    return history.listen(() => {
      updatePath(window.location.pathname.split("/")[1]);
    });
  }, [env, updatePath, history]);

  return null;
};
