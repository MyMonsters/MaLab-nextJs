import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const MaLabApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://pokeapi.co/api/v2/',
    baseUrl: 'https://www.machao.group/',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    // getPokemonByName: builder.query({
    //   query: (name) => `pokemon/${name}`,
    // }),
    // getPokemonList: builder.query({
    //   query: () => `pokemon/`,
    // }),
    getIntroduction: builder.query({
      query: () => `deeptime/getIntroduction`,
    }),
    getPublications: builder.query({
      query: () => `deeptime/getpublication`,
    }),
    getMembers1: builder.query({
      //Teachers
      query: () => `deeptime/getMembers/1`,
    }),
    getMembers2: builder.query({
      //PHD
      query: () => `deeptime/getMembers/2`,
    }),
    getMembers3: builder.query({
      //masters
      query: () => `deeptime/getMembers/3`,
    }),
    getMembers4: builder.query({
      //undergraduate
      query: () => `deeptime/getMembers/4`,
    }),
    getNews: builder.query({
      query: () => `/deeptime/getNews`,
    }),
    getProject: builder.query({
      query: () => `/deeptime/getProject`,
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetIntroductionQuery,
  useGetPublicationsQuery,
  useGetMembers1Query,
  useGetMembers2Query,
  useGetMembers3Query,
  useGetMembers4Query,
  useGetNewsQuery,
  useGetProjectQuery,
  util: { getRunningQueriesThunk },
} = MaLabApi;

// export endpoints for use in SSR

export const {
  getIntroduction,
  getPublications,
  getMembers1,
  getMembers2,
  getMembers3,
  getMembers4,
  getNews,
  getProject,
} = MaLabApi.endpoints;
