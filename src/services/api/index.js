import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

export const useApi = () => {
  const { updatePages, updateStages } = useContext(GlobalContext);

  const networkActivity = (toggle) => {
    let networkIcon = document.querySelector(".network");

    if (toggle === "show") {
      networkIcon.classList.remove("hidden");
    } else {
      networkIcon.classList.add("hidden");
    }
  };

  const getAllPages = () => {
    let endpoint = "https://5f3568a75b91f60016ca4cf7.mockapi.io/api/v1/pages";

    networkActivity("show");

    axios
      .get(endpoint)
      .then((response) => {
        networkActivity("hide");
        updatePages(response.data);
      })
      .catch((error) => {
        networkActivity("hide");
        throw error;
      });
  };

  const getStageDetails = (id, pageName) => {
    let query = `?pageId=${id}`;
    let endpoint = "https://5f3568a75b91f60016ca4cf7.mockapi.io/api/v1/stages";

    networkActivity("show");

    axios
      .get(`${endpoint}${query}`)
      .then((response) => {
        networkActivity("hide");
        updateStages(response.data, pageName);
      })
      .catch((error) => {
        networkActivity("hide");
        throw error;
      });
  };

  return { getAllPages, getStageDetails };
};
