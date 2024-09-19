import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ITag } from "@server/data/types/tag";
import { IBlog } from "@server/data/types/blog";
import { IProject } from "@server/data/types/project";

export interface IDefaultState {
  profile: any;
  tags: ITag[] | [];
  blogs: IBlog[] | [];
  projects: IProject[] | [];
  initProgress: number;
  hasVisited: boolean;
  hasSleep: boolean;
  hasFullScreen: boolean;
  pageCached: string[];
}

const initialState: IDefaultState = {
  profile: [],
  tags: [],
  blogs: [],
  projects: [],
  initProgress: 0,
  hasVisited: false,
  hasSleep: false,
  hasFullScreen: true,
  pageCached: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
    setTags: (state, action: PayloadAction<ITag[]>) => {
      state.tags = action.payload;
    },
    setBlogs: (state, action: PayloadAction<IBlog[]>) => {
      state.blogs = action.payload;
    },
    setProjects: (state, action: PayloadAction<IProject[]>) => {
      state.projects = action.payload;
    },
    setInitProgress: (state, action: PayloadAction<number>) => {
      state.initProgress = action.payload;
    },
    setHasSleep: (state, action: PayloadAction<boolean>) => {
      state.hasSleep = action.payload;
    },
    setHasFullScreen: (state, action: PayloadAction<boolean>) => {
      state.hasFullScreen = action.payload;
    },
    setHasVisited: (state, action: PayloadAction<boolean>) => {
      state.hasVisited = action.payload;
    },
    addPageToCache: (state, action: PayloadAction<string>) => {
      if (!state.pageCached.includes(action.payload)) {
        state.pageCached.push(action.payload);
      }
    },
  },
});

export const {
  setProfile,
  setTags,
  setBlogs,
  setProjects,
  setInitProgress,
  setHasFullScreen,
  setHasSleep,
  setHasVisited,
  addPageToCache,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
