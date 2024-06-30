import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ServerError } from '@/types/serverError';

import { SERVER_URL } from '@/constants/constants';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, ServerError>,
  keepUnusedDataFor: 30,
  tagTypes: ['User'],
  endpoints: () => ({}),
});
