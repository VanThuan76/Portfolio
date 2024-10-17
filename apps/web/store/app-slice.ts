import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IBlog } from "@shared/query/types/blog";
import { IProject } from "@shared/query/types/project";

import { ModalProps } from "@shared/hooks/use-modal";
import { Database } from "@shared/utils/supabase/types";

export interface IDefaultState {
  tags: Database["public"]["Tables"]["config"]["Row"][] | [];
  informations: Database["public"]["Tables"]["information"]["Row"][] | [];
  blogCategories: Database["public"]["Tables"]["blog_category"]["Row"][] | [];
  blogs: IBlog[] | [];
  projects: IProject[] | [];
  initProgress: number;
  hasVisited: boolean;
  isPageChanging: boolean;
  pageCached: string[];
  positions: {
    cameraPosition: any[];
    positionModelMain: any[];
    positionModelCaffe: any[];
    positionModelCastle: any[];
    positionModelRestaurant: any[];
    positionModelSchool: any[];
    positionModelDepartment: any[];
    positionModelMountain: any[];
    positionModelCity: any[];
  };
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
  isPageChanging: false,
  pageCached: [],
  positions: {
    cameraPosition: [],
    positionModelMain: [],
    positionModelCaffe: [],
    positionModelRestaurant: [],
    positionModelCastle: [],
    positionModelSchool: [],
    positionModelDepartment: [],
    positionModelMountain: [],
    positionModelCity: [],
  },
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
    setIsPageChanging: (state, action: PayloadAction<boolean>) => {
      state.isPageChanging = action.payload;
    },
    addPageToCache: (state, action: PayloadAction<string>) => {
      if (!state.pageCached.includes(action.payload)) {
        state.pageCached.push(action.payload);
      }
    },
    setPositionModels: (
      state,
      action: PayloadAction<Partial<IDefaultState["positions"]>>,
    ) => {
      state.positions = {
        ...state.positions,
        ...action.payload,
      };
    },
    openModal: (state, action: PayloadAction<ModalProps>) => {
      state.modalStore = action.payload;
    },
    closeModal: (state) => {
      state.modalStore = {
        ...state.modalStore,
        type: null,
        data: undefined,
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
  setIsPageChanging,
  addPageToCache,
  setPositionModels,
  openModal,
  closeModal,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
