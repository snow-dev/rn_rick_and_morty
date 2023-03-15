import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Character, Characters, Episode} from '../utils/types';

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

        // delete response.episode;

        return {
          ...response,
          episodes: episodes,
        };
      },
    }),
    getCharactersByIds: builder.query<Character[], string | number>({
      query: (id: number) => `character/${id}`,
    }),
    getCharacters: builder.query<Characters, void>({
      query: () => 'character',
    }),
    getEpisode: builder.query<Episode, number>({
      query: (id: number | null) => `episode/${id}`,
      transformResponse: (response: Episode): Episode => {
        const characters = response.characters.map((character: string) => {
          const id = character.split('/').pop();
          return {
            id: parseInt(id!),
          };
        });

        return {
          ...response,
          characterIds: characters,
        };
      },
    }),
  }),
});

export const {
  useGetCharacterByIdQuery,
  useGetCharactersByIdsQuery,
  useGetCharactersQuery,
  useGetEpisodeQuery,
} = characterApi;

// Select character by id
export const selectCharacters = (state: any) => {
  return state.characterApi.endpoints.getCharacterById.select()(state);
};
