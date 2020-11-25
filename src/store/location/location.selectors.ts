import {IAppState} from "../reducer";

export const getLocation = (state: IAppState) => {
  return state.location;
};