import { api } from '@/redux/API/API';

import { ArtistType } from '@/types/artits';

type GetArtistResponse = ArtistType;
type GetArtistArgs = string;

type GetPopularArtistsResponse = { artists: ArtistType[]; hasMore: boolean };
type GetPopularArtistsArgs = { page?: number; limit: number };

type GetArtistsByTagResponse = { artists: ArtistType[]; hasMore: boolean };
type GetArtistsByTagArgs = {
  page?: number;
  limit: number;
  tags: string[];
  exclude?: string;
};

export const artistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getArtist: builder.query<GetArtistResponse, GetArtistArgs>({
      query: (name: string) => ({
        url: `artists/${name}`,
      }),
    }),
    getPopularArtists: builder.query<GetPopularArtistsResponse, GetPopularArtistsArgs>({
      query: ({ page = 1, limit }) => ({
        url: `artists/popular?page=${page}&limit=${limit}`,
      }),
    }),
    getArtistsByTags: builder.query<GetArtistsByTagResponse, GetArtistsByTagArgs>({
      query: ({ tags, page = 1, limit, exclude }) => ({
        url: `artists/tags?tags=${encodeURIComponent(
          tags.toString()
        )}&page=${page}&limit=${limit}&exclude=${exclude}`,
      }),
    }),
  }),
});

export const { useGetArtistQuery, useGetArtistsByTagsQuery, useGetPopularArtistsQuery } = artistApi;
