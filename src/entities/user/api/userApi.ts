import baseApi from "@shared/api/baseApi";
import {
  setTokenToLS,
  removeTokenFromLS,
} from "@shared/utils/helpers/apiHelpers";
import {
  type IAuthResponse,
  type IAuthParams,
  type IRegisterParams,
} from "@shared/modal/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, IAuthParams>({
      query: (auth) => ({
        url: "auth/login",
        method: "POST",
        body: auth,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          setTokenToLS(result.data.access_token);
        } catch (error) {
          console.error(error);
        }
      },
    }),
    register: builder.mutation<IAuthResponse, IRegisterParams>({
      query: (registration) => ({
        url: "auth/signUp",
        method: "POST",
        body: registration,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          setTokenToLS(result.data.access_token);
        } catch (error) {
          console.error(error);
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => "auth/logout",
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          removeTokenFromLS();
          dispatch(baseApi.util.resetApiState());
        } catch (error) {
          console.error(error);
        }
      },
    }),
    refresh: builder.query<IAuthResponse, void>({
      query: () => "auth/refresh",
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          setTokenToLS(result.data.access_token);
        } catch (error) {
          console.error(error);
          removeTokenFromLS();
          dispatch(baseApi.util.resetApiState());
        }
      },
    }),
  }),

  overrideExisting: false,
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useRefreshQuery,
} = userApi;
