import { useSearchParams, createSearchParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import queryString from "query-string";

export const useQueryReducer = <T extends Record<string, number | string[]>>(
  defaultValue: T,
  key = "s"
) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [state, dispatch] = useReducer(
    (state: T, newState: Partial<T>) => ({ ...state, ...newState } as T),
    searchParams.toString()
      ? (queryString.parse(decodeURI(searchParams.toString()), {
          parseNumbers: true,
          arrayFormat: "index",
        }) as T)
      : defaultValue
  );

  console.log({ state }, decodeURI(searchParams.toString()));

  useEffect(() => {
    setSearchParams(
      createSearchParams(queryString.stringify(state, { arrayFormat: "index" }))
    );
  }, [state, setSearchParams, key]);

  return [state, dispatch] as const;
};
