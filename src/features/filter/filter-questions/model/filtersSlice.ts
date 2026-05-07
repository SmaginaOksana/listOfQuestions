import {
  createSlice,
  type PayloadAction,
  createAction,
} from "@reduxjs/toolkit";
import {
  type IInitialStateFilters,
  FilterName,
} from "@features/filter/filter-questions/model/types";

const initialState: IInitialStateFilters = {
  [FilterName.SpecializationId]: "11",
  [FilterName.Skills]: [],
  [FilterName.Complexity]: [],
  [FilterName.Rate]: [],
  [FilterName.Status]: "",
  [FilterName.Search]: "",
};

export const resetState = createAction("filters/reset");

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter: (
      state: IInitialStateFilters,
      action: PayloadAction<{
        name: FilterName;
        value: string;
      }>
    ) => {
      const { name, value } = action.payload;

      switch (name) {
        case FilterName.SpecializationId:
          if (state[name] === value) return;

          state[name] = value;
          state[FilterName.Skills] = [];
          break;

        case FilterName.Skills:
        case FilterName.Complexity:
        case FilterName.Rate:
          state[name].includes(value)
            ? (state[name] = state[name].filter((el) => el !== value))
            : state[name].push(value);
          break;

        case FilterName.Status:
        case FilterName.Search:
          state[name] === value ? (state[name] = "") : (state[name] = value);
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetState, () => initialState);
  },
});

export const { updateFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
