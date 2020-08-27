import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useApi } from "../../services/api/index";
import { GlobalContext } from "../../services/context/GlobalState";

export const TrackPath = () => {
  const { env, updatePath, stages, pages } = useContext(GlobalContext);
  const history = useHistory();
  const { getStageDetails } = useApi();

  useEffect(() => {
    if (env.path === null) {
      updatePath();
    }

    if (env.id !== "" && stages === null && pages !== null) {
      console.log(pages);
      let processName = pages.pages.map((data) => {
        if (data.id === env.id) {
          return data.name;
        }
        return null;
      });
      getStageDetails(env.id, processName);
    }

    return history.listen(() => {
      updatePath();
    });
  }, [env, updatePath, history, stages, getStageDetails, pages]);

  return null;
};
