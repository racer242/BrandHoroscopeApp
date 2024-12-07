import { unknownAgency } from "../configuration/Agencies";
import { unknownComp } from "../configuration/Comps";
import { unknownMatch } from "../configuration/Matches";

var randomVal = 0;

const getNext = (a) => {
  let l = a.length;
  let v = a[randomVal % l];
  randomVal++;
  return v;
};

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
      let userDate = new Date(state.date);
      let userZodiac = "";
      for (let element of state.zodiac) {
        let startDate = new Date(
          userDate.getFullYear() + "-" + [...element.start].reverse().join("-")
        );
        let endDate = new Date(
          userDate.getFullYear() + "-" + [...element.end].reverse().join("-")
        );

        if (userDate >= startDate && userDate <= endDate) {
          userZodiac = element.name;
          break;
        }
      }
      let comps = state.comps.reduce((a, v, i) => {
        if (v.zodiac == userZodiac) {
          a.push(v);
        }
        return a;
      }, []);

      let userComp = unknownComp;
      if (comps.length > 0) {
        userComp = comps[0];
      }
      return {
        ...state,
        dateSelected: true,
        screens: 2,
        userComp,
      };
    }

    case "NEXT_MATCH_SELECTED":
    case "USER_MATCH_SELECTED": {
      let matches = state.matches.reduce((a, v, i) => {
        if (v.comp == state.userComp.name) {
          a.push(v);
        }
        return a;
      }, []);
      let userMatch = unknownMatch;
      if (matches.length > 0) {
        userMatch = getNext(matches);
      }
      let matchAgencies = state.agencies.reduce((a, v, i) => {
        if (v.name == userMatch.agency) {
          a.push(v);
        }
        return a;
      }, []);
      let userAgency = unknownAgency;
      if (matchAgencies.length > 0) {
        userAgency = matchAgencies[0];
      }
      return {
        ...state,
        matchSelected: true,
        screens: 3,
        userMatch,
        userAgency,
      };
    }

    case "PRELOAD_COMPLETE": {
      return {
        ...state,
        preloaded: true,
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
