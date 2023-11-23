import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface searchState {
  searchValue: string;
}

// Define the initial state using that type
const initialState: searchState = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
