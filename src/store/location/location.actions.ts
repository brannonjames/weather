import {ILocation} from "../../services/LocationService/LocationService";

//
//  ACTION TYPES
//
export enum LocationActionType {
  SET_LOCATION = 'SET_LOCATION'
}

//
// ACTIONS
//
export interface LocationAction<P> {
  type: LocationActionType
  payload: P
}

export const setLocation = (location: ILocation) : LocationAction<ILocation> => ({
  type: LocationActionType.SET_LOCATION,
  payload: location
});