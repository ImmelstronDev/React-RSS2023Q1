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
  }),
});

export default dataApi;
