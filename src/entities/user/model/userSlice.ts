import { createSlice } from "@reduxjs/toolkit";

import { removeTokenFromLS } from "@shared/utils/helpers/apiHelpers";

const initialState = { access_token: null, user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.access_token = null;
      removeTokenFromLS();
    },
  },
});

export default userSlice.reducer;
export const { logoutUser } = userSlice.actions;
