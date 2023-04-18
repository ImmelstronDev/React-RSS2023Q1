import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { CardData } from 'modules/components/card/card';
import URLs from '../constants/urlConst';

const dataApi = createApi({
  reducerPath: 'cardDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URLs.BASE_URL,
  }),
  endpoints: (build) => ({
    fetchAllCards: build.query<CardData[], string>({
      query: (value = '') => ({ url: '/', params: { q: value } }),
    }),
    fetchModalCard: build.query<CardData[], number | null>({
      query: (value = null) => ({ url: '/', params: { id: value } }),
    }),
  }),
});

export default dataApi;
