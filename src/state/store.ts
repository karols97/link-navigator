"use client";

import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "@/state/links/linksSlice";

export const store = configureStore({
  reducer: {
    links: linksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
