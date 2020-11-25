import {createStore} from "redux";
import { persistStore  } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reducer from './reducer';

const composeEnhancers = composeWithDevTools({});


export  const store = createStore(reducer, {}, composeEnhancers());
export const persistor = persistStore(store);
