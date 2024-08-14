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
  isOpenScreen: boolean;
  hasSleep: boolean;
  hasFullScreen: boolean;
}

const initialState: IDefaultState = {
  profile: [],
  tags: [],
  blogs: [],
  projects: [],
  isOpenScreen: false,
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
    setIsOpenScreen: (state, action: PayloadAction<boolean>) => {
      state.isOpenScreen = action.payload;
    },
    setHasFullScreen: (state, action: PayloadAction<boolean>) => {
      state.hasFullScreen = action.payload;
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
  setIsOpenScreen,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
