import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/DataSlice';
import searchReducer from './reducers/SearchSlice';

const rootReducer = combineReducers({ dataReducer, searchReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
