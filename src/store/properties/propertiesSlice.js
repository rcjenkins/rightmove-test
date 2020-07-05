import { createSlice } from '@reduxjs/toolkit';

import * as Api from '../../api';

const properties = createSlice({
  name: 'properties',
  initialState: {
    properties: [],
    isLoading: false,
    filters: []
  },
  reducers: {
    getPropertiesStart(state) {
      state.isLoading = true;
    },
    getPropertiesFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getPropertiesSuccess(state, { payload: { properties} }) {
      state.properties = properties;
      state.isLoading = false;
      state.error = null;
    },
    updateFilters(state, action){
      let filters = state.filters
      let found = filters.findIndex((element)=> {
        return element.key === action.payload.key
      })
      if(found >= 0) {
        filters[found].value = action.payload.value
      } else {
        filters.push(action.payload)
      }      
      state.filters = filters
    },
  },
});

export const {
  getPropertiesStart,
  getPropertiesFailure,
  getPropertiesSuccess,
  updateFilters,
} = properties.actions;

export const fetchProperties = () => async (dispatch, getState) => {
  try {
    dispatch(getPropertiesStart());
    const filters = getState().properties.filters
    const properties = await Api.getProperties(filters);
    dispatch(getPropertiesSuccess({ properties, filters }));
  } catch (err) {
    dispatch(getPropertiesFailure(err.toString()));
  }
};

export default properties.reducer;
