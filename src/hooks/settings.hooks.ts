import { useSelector } from 'react-redux';
import {StateHookTuple} from "./index";
import {getIsMetric} from "../store/settings/settings.selectors";

export const useIsMetric = () : StateHookTuple<boolean> => {
  const isMetric = useSelector(getIsMetric);
  return [isMetric, () => {}];
};