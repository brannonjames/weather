import {combineReducers, Reducer} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {ILocation} from "../services/LocationService/LocationService";
import {IForecast} from "../services/ForecastService/ForecastService";
import settingsReducer from './settings/settings.reducer';
import locationReducer from './location/location.reducer';
import forecastReducer from './forecast/forecast.reducer';


// structure of the entire store
export interface IAppState {
  settings: {
    showSplash: boolean
    metric: boolean
  }
  location: ILocation
  forecast: IForecast
}

// configuration for persisting redux state in local storage
const persistConfig = {
  key: 'root',
  storage,
};

// TODO need to dive deeper into typing this persistReducer method to remove the 'anys'
export default combineReducers<IAppState>({
  settings: persistReducer<any>(persistConfig, settingsReducer),
  location: persistReducer<any>(persistConfig, locationReducer),
  forecast: forecastReducer
});