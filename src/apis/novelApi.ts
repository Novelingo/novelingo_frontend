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
			query: ({ page, limit, filters }) => {
				console.log({
					// query params
					page,
					limit,
					...filters,
				});
				return {
					url: "/",
					params: {
						// query params
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
	}),
});

export const { useGetNovelsQuery, useGetNovelByIdQuery } = novelApi;
