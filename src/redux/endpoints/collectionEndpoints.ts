import { api } from '@/redux/API/API';

import { CollectionType } from '@/types/collection';

export const collectionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCollection: builder.query<CollectionType, string>({
      query: (id) => ({
        url: `collections/${id}`,
      }),
    }),
  }),
});

export const { useGetCollectionQuery } = collectionApi;
