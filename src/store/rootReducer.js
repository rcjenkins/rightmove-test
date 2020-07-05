import { combineReducers } from '@reduxjs/toolkit';

import propertiesReducer from './properties/propertiesSlice';

const rootReducer = combineReducers({
  properties: propertiesReducer,
});

export default rootReducer;
