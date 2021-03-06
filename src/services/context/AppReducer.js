export default (state, action) => {
  switch (action.type) {
    case "UPDATE_PATH":
      let id = "";

      if (action.payload.id !== undefined) {
        id = action.payload.id;
      }

      return {
        ...state,
        env: {
          ...state.env,
          path: action.payload.path,
          id: id,
        },
      };
    case "UPDATE_PAGE_ID":
      return {
        ...state,
        pages: {
          ...state.pages,
          id: action.payload,
        },
      };
    case "UPDATE_PAGES":
      return {
        ...state,
        pages: action.payload,
        env: {
          ...state.env,
          loading: false,
        },
      };
    case "UPDATE_STAGES":
      return {
        ...state,
        stages: action.payload.data,
        env: {
          ...state.env,
          loading: false,
          heading: action.payload.pageName,
        },
      };
    case "IS_LOADING":
      return {
        ...state,
        env: {
          ...state.env,
          loading: action.payload,
        },
      };
    default:
      return state;
  }
};
