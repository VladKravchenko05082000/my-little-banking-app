import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  selectedUserId: number | null;
  selectedPostId: number | null;
  searchQuery: string;
} = {
  selectedUserId: null,
  selectedPostId: null,
  searchQuery: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSelectedUserId: (state, action: PayloadAction<number | null>) => {
      state.selectedUserId = action.payload;
      state.selectedPostId = null;
    },
    setSelectedPostId: (state, action: PayloadAction<number | null>) => {
      state.selectedPostId = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    resetFilters: (state) => {
      state.selectedUserId = null;
      state.searchQuery = "";
    },
  },
});

export const {
  setSelectedUserId,
  setSelectedPostId,
  setSearchQuery,
  resetFilters,
} = uiSlice.actions;

export default uiSlice.reducer;
