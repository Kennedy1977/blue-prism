import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  pages: null,
  stages: null,
  env: {
    path: null,
    loading: false,
  },
};

// Create Context
export const GlobalContext = createContext(initialState);

// Store Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function updatePath() {
    dispatch({
      type: "UPDATE_PATH",
      payload: window.location.pathname.split("/")[1],
    });
  }

  function updatePages(data) {
    dispatch({
      type: "UPDATE_PAGES",
      payload: data,
    });
  }

  function updatePageId(data) {
    dispatch({
      type: "UPDATE_PAGE_ID",
      payload: data,
    });
  }

  function updateStages(data, pageName) {
    let payload = { data, pageName };
    dispatch({
      type: "UPDATE_STAGES",
      payload: payload,
    });
  }

  function isLoading(data) {
    dispatch({
      type: "IS_LOADING",
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        pages: state.pages,
        stages: state.stages,
        env: state.env,
        updatePath,
        updatePages,
        updatePageId,
        updateStages,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
