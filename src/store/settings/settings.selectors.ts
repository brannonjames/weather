import {IAppState} from "../reducer";

export const getIsMetric = (state: IAppState) : boolean  => {
  return state.settings.metric;
};