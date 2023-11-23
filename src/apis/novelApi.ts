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

export interface GetNovelsRequest {
  page: number;
  limit: number;
  filters: { [key: string]: string[] };
  search: string;
}

// 1 create types for response and request
export interface GetSupportedLanguagesResponse {
  data: {
    id: string;
    title: string;
    icon: string;
  }[];
}
export type GetSupportedLanguagesRequest = void; //because we dont send anything

export interface GetNovelPreviewResponse {
  title: string;
  description: string;
  cover: string;
  language_display: string;
  genre_display: string;
}
export interface GetNovelPreviewRequest {
  title?: string;
  description?: string;
  genre: string;
  level: string;
  language: string;
  size: string;
  notes: string;
}

// Define a service using a base URL and expected endpoints
export const novelApi = createApi({
  reducerPath: "novelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://novelingo-o2cuk.ondigitalocean.app/api/novels/",
    paramsSerializer: (params) => {
      // add support for array params
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => searchParams.append(key, item));
        } else {
          searchParams.append(key, value);
        }
      });
      return searchParams.toString();
    },
  }),
  endpoints: (builder) => ({
    getNovels: builder.query<GetNovelsResponse, GetNovelsRequest>({
      query: ({ page, limit, filters, search }) => {
        return {
          url: "/",
          params: {
            // query params
            search,
            page,
            limit,
            ...filters,
          },
        };
      },
    }),

    getNovelById: builder.query<GetNovelByIdResponse, string>({
      query: (id) => `${id}`,
    }),

    getNovelPreview: builder.query<
      GetNovelPreviewResponse,
      GetNovelPreviewRequest
    >({
      query: ({ title, description, genre, level, language, notes }) => {
        return {
          url: "/preview", // url of api on the server

          params: {
            // query params that we send to the server
            title,
            description,
            genre,
            level,
            language,
            notes,
          },
        };
      },
    }),

    // 2 create query
    getSupportedLanguages: builder.query<
      GetSupportedLanguagesResponse,
      GetSupportedLanguagesRequest
    >({
      query: () => "/supported/languages",
      // query: ()=>{
      //   return {
      //     url: '/supported/languages'
      //   }
      // }
    }),
  }),
});

export const {
  useGetNovelsQuery,
  useGetNovelByIdQuery,
  useGetNovelPreviewQuery,
  useGetSupportedLanguagesQuery,
} = novelApi;
