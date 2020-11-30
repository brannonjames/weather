import {SettingActionType} from "./settings.actions";

const initialState = {
  showSplash: true,
  metric: false
};

const settingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SettingActionType.SET_IS_METRIC:
      return { ...state, metric: payload };
    default:
      return state;
  }
};

export default settingsReducer;