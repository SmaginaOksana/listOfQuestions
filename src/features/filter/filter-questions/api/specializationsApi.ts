import baseApi from "@shared/api.ts/baseApi";

import {
  type ISpecializationsParams,
  type ISpecializationsResponce,
} from "@features/filter/filter-questions/model/types";

const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<
      ISpecializationsResponce,
      ISpecializationsParams
    >({
      query: (params) => ({ url: `specializations`, params }),
      providesTags: ["Specializations"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpecializationsQuery } = specializationsApi;
