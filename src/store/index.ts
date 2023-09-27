import { configureStore } from "@reduxjs/toolkit";
import { novelApi } from "../apis/novelApi";

export const store = configureStore({
  reducer: {
    [novelApi.reducerPath]: novelApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(novelApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
