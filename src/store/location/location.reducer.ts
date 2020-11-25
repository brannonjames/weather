import {ILocation} from "../../services/LocationService/LocationService";
import {LocationActionType} from "./location.actions";

const initialState: ILocation = {
  id: 0,
  name: '',
  region: '',
  country: '',
  lat: 0,
  lon: 0,
  url: ''
};

const locationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LocationActionType.SET_LOCATION:
      return payload;
    default:
      return state;
  }
};

export default locationReducer;