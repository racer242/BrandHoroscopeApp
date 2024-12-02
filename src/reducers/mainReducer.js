let mainReducerController = (state = {}, action) => {
  console.log("mainReducer", action);

  switch (action.type) {
    case "APP_INIT": {
      return {
        ...state,
        ...action.data,
        screens: 1,
        date: null,
      };
    }

    case "SET_STORE_DATA": {
      return {
        ...state,
        ...action.data,
        loaded: true,
      };
    }

    case "USER_DATE_CHANGED": {
      return {
        ...state,
        date: action.date,
      };
    }

    case "USER_DATE_SELECTED": {
      return {
        ...state,
        dateSelected: true,
        screens: 2,
      };
    }

    case "USER_MATCH_SELECTED": {
      return {
        ...state,
        matchSelected: true,
        screens: 3,
      };
    }

    default:
      return state;
  }
};

const mainReducer = (state = {}, action) => {
  if (action.extraAction) {
    state = mainReducer(state, action.extraAction);
  }

  state = mainReducerController(state, action);

  return state;
};

export default mainReducer;
