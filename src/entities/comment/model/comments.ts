import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comment, hackernewsApi } from '@/shared/api';

export const api = createApi({
  reducerPath: 'comments',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchComment: builder.query<Comment, number>({
      queryFn: async (id: number) => {
        try {
          const data = await hackernewsApi.items.fetch<Comment>(id);
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useFetchCommentQuery, useLazyFetchCommentQuery } = api;
