import { useSelector, useDispatch } from 'react-redux';
import {StateHookTuple} from "./index";
import {getIsMetric} from "../store/settings/settings.selectors";
import {setIsMetric} from "../store/settings/settings.actions";

export const useIsMetric = () : StateHookTuple<boolean> => {
  const dispatch = useDispatch();
  const isMetric = useSelector(getIsMetric);
  return [isMetric, (newVal) => dispatch(setIsMetric(newVal))];
};