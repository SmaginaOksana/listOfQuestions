import baseApi from "@shared/api/baseApi";
import { type IQuestion } from "@entities/question/modal/types";

interface IQuestionsParams {
  specializationId?: number;
  skills?: number[];
  complexity?: number[];
  rate?: number[];
  title?: string;
  page?: number;
  limit?: number;
}

interface IQuestionsResponce {
  data: IQuestion[];
  limit: number;
  total: number;
  page: number;
}

const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuestionsResponce, IQuestionsParams>({
      query: (params) => ({ url: `questions/public-questions`, params }),
      providesTags: ["Questions"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetQuestionsQuery } = questionsApi;
