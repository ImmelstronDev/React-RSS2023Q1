import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataApi from '../api/serviceApi';
import dataReducer from './reducers/DataSlice';
import searchReducer from './reducers/SearchSlice';
import formReducer from './reducers/FormSlice';

const rootReducer = combineReducers({
  dataReducer,
  searchReducer,
  formReducer,
  [dataApi.reducerPath]: dataApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
