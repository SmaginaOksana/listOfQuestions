import { combineReducers } from "@reduxjs/toolkit";

import baseApi from "@shared/api/baseApi";
import filtersReducer from "@features/filter/filter-questions/model/filtersSlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  filters: filtersReducer,
});

export default rootReducer;
