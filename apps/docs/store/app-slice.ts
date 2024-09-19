import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ITag } from "@server/data/types/tag";
import { IBlog } from "@server/data/types/blog";
import { IProject } from "@server/data/types/project";
import { IInformationWork } from "@server/data/types/information-work";

export interface IDefaultState {
    profile: any;
    tags: ITag[] | [];
    blogs: IBlog[] | [];
    projects: IProject[] | [];
    informationWorks: IInformationWork[] | [];
    initProgress: number;
    initBackground: string;
    hasVisited: boolean;
    hasSleep: boolean;
    hasCloseScreen: boolean;
    hasFullScreen: boolean;
    pageCached: string[];
}

const initialState: IDefaultState = {
    profile: [],
    tags: [],
    blogs: [],
    projects: [],
    informationWorks: [],
    initProgress: 0,
    initBackground: "",
    hasVisited: false,
    hasSleep: false,
    hasCloseScreen: true,
    hasFullScreen: false,
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
        setInformationWorks: (state, action: PayloadAction<IInformationWork[]>) => {
            state.informationWorks = action.payload;
        },
        setInitProgress: (state, action: PayloadAction<number>) => {
            state.initProgress = action.payload;
        },
        setInitBackground: (state, action: PayloadAction<string>) => {
            state.initBackground = action.payload;
        },
        setHasSleep: (state, action: PayloadAction<boolean>) => {
            state.hasSleep = action.payload;
        },
        setHasCloseScreen: (state, action: PayloadAction<boolean>) => {
            state.hasCloseScreen = action.payload;
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
    setInformationWorks,
    setInitProgress,
    setInitBackground,
    setHasFullScreen,
    setHasSleep,
    setHasVisited,
    setHasCloseScreen,
    addPageToCache,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
