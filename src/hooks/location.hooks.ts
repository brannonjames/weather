import { useSelector, useDispatch } from 'react-redux';
import {getLocation} from "../store/location/location.selectors";
import {StateHookTuple} from "./index";
import {ILocation} from "../services/LocationService/LocationService";
import {setLocation} from "../store/location/location.actions";

export const useLocation = () : StateHookTuple<ILocation> => {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  return [location, l => dispatch(setLocation(l))];
};