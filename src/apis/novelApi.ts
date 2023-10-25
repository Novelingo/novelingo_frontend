import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Novel, NovelFilter } from "../types/novel.type";

interface GetNovelsResponse {
  data: Omit<Novel, "paragraphs">[];
  filter: {
    groups: NovelFilter[];
  };
  countTotal: number;
  countCurrent: number;
  pageTotal: number;
  pageCurrent: number;
}

interface GetNovelByIdResponse {
  data: Novel;
}

// Define a service using a base URL and expected endpoints
export const novelApi = createApi({
  reducerPath: "novelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://novelingo-o2cuk.ondigitalocean.app/api/novels/",
  }),
  endpoints: (builder) => ({
    getNovels: builder.query<
      GetNovelsResponse,
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => {
        return {
          url: "/",
          params: {
            page,
            limit,
          },
        };
      },
    }),
    getNovelById: builder.query<GetNovelByIdResponse, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetNovelsQuery, useGetNovelByIdQuery } = novelApi;
