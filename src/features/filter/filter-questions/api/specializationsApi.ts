import baseApi from "@shared/api.ts/baseApi";

import {
  type IAllSpecializationsParams,
  type IAllSpecializationsResponce,
  type ISpecializationParams,
  type ISpecializationResponce,
} from "@features/filter/filter-questions/model/types";

const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecialization: builder.query<
      ISpecializationResponce,
      ISpecializationParams
    >({
      query: (params) => ({ url: `specializations/${params}` }),
    }),
    getAllSpecializations: builder.query<
      IAllSpecializationsResponce,
      IAllSpecializationsParams
    >({
      query: (params) => ({ url: `specializations`, params }),
      providesTags: ["Specializations"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpecializationQuery, useGetAllSpecializationsQuery } =
  specializationsApi;
