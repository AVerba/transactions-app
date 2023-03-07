import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['auth'],
  endpoints: builder =>({
    register: builder.mutation({
      query: newUser => ({
        url: 'api/auth/register',
        method: 'POST',
        body: newUser,
      }),
    }),
    login: builder.mutation({
      query: userInfo => ({
        url: 'api/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'api/auth/logout',
        method: 'POST',
        headers: {
          authorization: '',
        },
      }),
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useFetchCurrentUserQuery,
  useGoogleLoginMutation,
  useForgotPasswordMutation,
  useAvatarChangeMutation,
} = authApi;
