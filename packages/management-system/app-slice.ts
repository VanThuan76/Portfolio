import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IBlog } from "@repo/supabase/queries/types/blog";
import { IProject } from "@repo/supabase/queries/types/project";
import { Database } from "@repo/supabase/utils/types";

import { ModalProps } from "@repo/hooks";

export interface IDefaultState {
    tags: Database["public"]["Tables"]["config"]["Row"][] | [];
    informations: Database["public"]["Tables"]["information"]["Row"][] | [];
    blogCategories: Database["public"]["Tables"]["blog_category"]["Row"][] | [];
    blogs: IBlog[] | [];
    projects: IProject[] | [];
    initProgress: number;
    hasVisited: boolean;
    modalStore: ModalProps;
}

const initialState: IDefaultState = {
    informations: [],
    tags: [],
    blogs: [],
    blogCategories: [],
    projects: [],
    initProgress: 0,
    hasVisited: false,
    modalStore: {
        type: null,
        data: {},
        isOpen: false,
    },
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setInformation: (
            state,
            action: PayloadAction<
                Database["public"]["Tables"]["information"]["Row"][]
            >,
        ) => {
            state.informations = action.payload;
        },
        setTags: (
            state,
            action: PayloadAction<Database["public"]["Tables"]["config"]["Row"][]>,
        ) => {
            state.tags = action.payload;
        },
        setBlogs: (state, action: PayloadAction<IBlog[]>) => {
            state.blogs = action.payload;
        },
        setBlogCategories: (
            state,
            action: PayloadAction<
                Database["public"]["Tables"]["blog_category"]["Row"][]
            >,
        ) => {
            state.blogCategories = action.payload;
        },
        setProjects: (state, action: PayloadAction<IProject[]>) => {
            state.projects = action.payload;
        },
        setInitProgress: (state, action: PayloadAction<number>) => {
            state.initProgress = action.payload;
        },
        setHasVisited: (state, action: PayloadAction<boolean>) => {
            state.hasVisited = action.payload;
        },
        openModal: (state, action: PayloadAction<ModalProps>) => {
            state.modalStore = action.payload;
        },
        closeModal: (state) => {
            state.modalStore = {
                ...state.modalStore,
                type: null,
                isOpen: false,
            };
        },
    },
});

export const {
    setInformation,
    setTags,
    setBlogs,
    setBlogCategories,
    setProjects,
    setInitProgress,
    setHasVisited,
    openModal,
    closeModal,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
