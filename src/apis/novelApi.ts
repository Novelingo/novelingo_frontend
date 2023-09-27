import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Novel } from "../types/novel.type";

// Define a service using a base URL and expected endpoints
export const novelApi = createApi({
  reducerPath: "novelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://novelingo-68nbb.ondigitalocean.app/api/novels/",
  }),
  endpoints: (builder) => ({
    getAllNovels: builder.query<Novel[], void>({
      query: () => "",
    }),
    getNovelById: builder.query<Novel, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetAllNovelsQuery, useGetNovelByIdQuery } = novelApi;
