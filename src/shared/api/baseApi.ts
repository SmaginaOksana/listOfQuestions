import {
  createApi,
  fetchBaseQuery,
  type QueryReturnValue,
} from "@reduxjs/toolkit/query/react";

import {
  getTokenCacheFromLS,
  setTokenToLS,
  removeTokenFromLS,
} from "@shared/utils/helpers/apiHelpers";
import { type IAuthResponse } from "@shared/modal/types";

const ApiTags = {
  questions: "Questions",
  specializations: "Specializations",
  skills: "Skills",
  auth: "Auth",
};

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const tokenCache = getTokenCacheFromLS();

    if (tokenCache) headers.set("Authorization", `Bearer ${tokenCache}`);
    return headers;
  },
});

const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshResult = (await baseQuery(
      "/auth/refresh",
      api,
      extraOptions
    )) as QueryReturnValue<IAuthResponse, unknown, unknown>;

    if (refreshResult.data) {
      setTokenToLS(refreshResult.data.access_token);

      result = await baseQuery(args, api, extraOptions);
    } else {
      removeTokenFromLS();
      api.dispatch(baseApi.util.resetApiState());
    }
  }
  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: Object.values(ApiTags),
  endpoints: () => ({}),
});

export default baseApi;
