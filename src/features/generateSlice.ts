import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface generateState {
  title: string;
  description: string;
  genre: string;
  language: string;
  level: string;
  notes: string;
}

// Define the initial state using that type
const initialState: generateState = {
  title: "",
  description: "",
  genre: "",
  language: "",
  level: "",
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
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
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
  setGenre,
  setLanguage,
  setLevel,
} = generateSlice.actions;

export default generateSlice.reducer;
