import {REMOVE, ADD} from '../../const/actionType'

const initialState = {
  alertInfo: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const newState = { ...state };
      newState.alertInfo = [...newState.alertInfo, action.payLoad];
      return newState;
    }
    case "clear": {
      const newState = { ...state };
      newState.alertInfo = initialState.alertInfo;
      return newState;
    }
    case REMOVE: {
      const newState = { ...state };
      newState.alertInfo = [
        ...newState.alertInfo.filter((x) => x.id != action.payLoad),
      ];
      return newState;
    }
    default:
      return state;
  }
};
