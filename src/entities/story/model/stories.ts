import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { StoriesList, Story, hackernewsApi } from '@/shared/api';

export const api = createApi({
  reducerPath: 'stories',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchStory: builder.query<Story, number>({
      queryFn: async (id: number) => {
        try {
          const data = await hackernewsApi.items.fetch<Story>(id);
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
    fetchStoriesList: builder.query<Story[], StoriesList>({
      queryFn: async (list: StoriesList) => {
        try {
          const ids = await hackernewsApi.stories.fetch(list, 100);
          const data = await hackernewsApi.items.fetchAll<Story>(ids);
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useFetchStoryQuery, useLazyFetchStoryQuery, useFetchStoriesListQuery, useLazyFetchStoriesListQuery } =
  api;
