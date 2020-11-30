//  ACTION TYPES
//
export enum SettingActionType {
  SET_IS_METRIC = 'SET_IS_METRIC'
}

//
// ACTIONS
//
export interface SettingAction<P> {
  type: SettingActionType
  payload: P
}

export const setIsMetric = (isMetric: boolean) : SettingAction<boolean> => ({
  type: SettingActionType.SET_IS_METRIC,
  payload: isMetric
});
