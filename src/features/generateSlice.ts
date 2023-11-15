import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface generateState {
  title: string;
  description: string;
  genreID: string;
  genreDisplay: string;
  languageID: string;
  languageDisplay: string;
  level: string;
  notes: string;
}

// Define the initial state using that type
const initialState: generateState = {
  title: "",
  description: "",
  genreID: "horror",
  genreDisplay: "Horror",
  languageID: "en",
  languageDisplay: "English",
  level: "A1",
  notes: "",
};

export const generateSlice = createSlice({
  name: "generate",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },

    setNotes: (state, action: PayloadAction<string>) => {
      state.notes = action.payload;
    },
    setGenreID: (state, action: PayloadAction<string>) => {
      state.genreID = action.payload;
    },
    setLanguageID: (state, action: PayloadAction<string>) => {
      state.languageID = action.payload;
    },
    setGenreDisplay: (state, action: PayloadAction<string>) => {
      state.genreDisplay = action.payload;
    },
    setLanguageDisplay: (state, action: PayloadAction<string>) => {
      state.languageDisplay = action.payload;
    },

    setLevel: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
    },
  },
});

export const {
  setTitle,
  setDescription,
  setNotes,
  setGenreID,
  setLanguageID,
  setGenreDisplay,
  setLanguageDisplay,
  setLevel,
} = generateSlice.actions;

export default generateSlice.reducer;
