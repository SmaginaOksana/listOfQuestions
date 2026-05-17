import baseApi from "@shared/api/baseApi";

import {
  type ISkillsParams,
  type ISkillsResponce,
} from "@features/filter/filter-questions/model/types";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<ISkillsResponce, ISkillsParams>({
      query: (params) => {
        return {
          url: `skills`,
          params,
        };
      },
      providesTags: ["Skills"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSkillsQuery } = skillsApi;
