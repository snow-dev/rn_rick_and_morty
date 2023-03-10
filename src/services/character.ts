import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Character, Characters} from './types';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  tagTypes: ['Character'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: builder => ({
    getCharacterById: builder.query<Character, number>({
      query: (id: number) => `character/${id}`,
      transformResponse: (response: Character): any => {
        const episodes = response.episode?.map((episode: string) => {
          return {
            url: episode,
            id: episode.split('/').pop(),
          };
        });

        delete response.episode;

        return {
          ...response,
          episodes: episodes,
        };
      },
    }),
    getCharacters: builder.query<Characters, void>({
      query: () => 'character',
    }),
  }),
});

export const {useGetCharacterByIdQuery, useGetCharactersQuery} = characterApi;
