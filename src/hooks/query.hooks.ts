import { useSearchParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { extractJSON } from "../utils";

export const useQueryReducer = <T>(defaultValue: T, key = "s") => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [state, dispatch] = useReducer(
    (state: T, newState: Partial<T>) => ({ ...state, ...newState } as T),
    extractJSON<T>(searchParams.get(key) || "", defaultValue)
  );

  useEffect(() => {
    setSearchParams({ [key]: JSON.stringify(state) });
  }, [state, setSearchParams, key]);

  return [state, dispatch] as const;
};
