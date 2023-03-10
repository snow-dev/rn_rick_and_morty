import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Character} from './types';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  tagTypes: ['Character'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: builder => ({
    getCharacterById: builder.query<Character[], number>({
      query: (id: number) => `character/${id}`,
    }),
    getCharacters: builder.query<Character, void>({
      query: () => 'character',
    }),
  }),
});

export const {useGetCharacterByIdQuery, useGetCharactersQuery} = characterApi;
