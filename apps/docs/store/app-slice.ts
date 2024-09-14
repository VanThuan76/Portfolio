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
  isHintSwipe: boolean;
  hasVisited: boolean;
  hasSleep: boolean;
  hasFullScreen: boolean;
}

const initialState: IDefaultState = {
  profile: [],
  tags: [],
  blogs: [],
  projects: [],
  hasVisited: false,
  isHintSwipe: true,
  hasSleep: false,
  hasFullScreen: true,
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
    setHasSleep: (state, action: PayloadAction<boolean>) => {
      state.hasSleep = action.payload;
    },
    setIsHintSwipe: (state, action: PayloadAction<boolean>) => {
      state.isHintSwipe = action.payload;
    },
    setHasFullScreen: (state, action: PayloadAction<boolean>) => {
      state.hasFullScreen = action.payload;
    },
    setHasVisited: (state, action) => {
      state.hasVisited = action.payload;
    },
  },
});

export const {
  setProfile,
  setTags,
  setBlogs,
  setProjects,
  setHasFullScreen,
  setHasSleep,
  setIsHintSwipe,
  setHasVisited,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
