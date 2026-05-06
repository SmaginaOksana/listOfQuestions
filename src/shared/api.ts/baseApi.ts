import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https:/api.yeatwork.ru/";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Questions", "Specializations", "Skills"],
  endpoints: (builder) => ({}),
});

export default baseApi;
