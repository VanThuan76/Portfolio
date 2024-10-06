import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ITag } from "@shared/query/types/tag";
import { IBlog } from "@shared/query/types/blog";
import { IProject } from "@shared/query/types/project";
import { IInformationWork } from "@shared/query/types/information-work";

import { ModalProps } from "@shared/hooks/use-modal";

export interface IDefaultState {
  profile: any;
  tags: ITag[] | [];
  blogs: IBlog[] | [];
  blogCategories: any[] | [];
  projects: IProject[] | [];
  informationWorks: IInformationWork[] | [];
  initProgress: number;
  hasVisited: boolean;
  pageCached: string[];
  positions: {
    cameraPosition: any[];
    positionModelMain: any[];
    positionModelCastle: any[];
    positionModelRestaurant: any[];
    positionModelSchool: any[];
    positionModelMountain: any[];
    positionModelCity: any[];
    positionModelOcean: any[];
  };
  modalStore: ModalProps;
}

const initialState: IDefaultState = {
  profile: [],
  tags: [],
  blogs: [],
  blogCategories: [],
  projects: [],
  informationWorks: [],
  initProgress: 0,
  hasVisited: false,
  pageCached: [],
  positions: {
    cameraPosition: [],
    positionModelMain: [],
    positionModelRestaurant: [],
    positionModelCastle: [],
    positionModelSchool: [],
    positionModelMountain: [],
    positionModelCity: [],
    positionModelOcean: [],
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
    setProfile: (state, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
    setTags: (state, action: PayloadAction<ITag[]>) => {
      state.tags = action.payload;
    },
    setBlogs: (state, action: PayloadAction<IBlog[]>) => {
      state.blogs = action.payload;
    },
    setBlogCategories: (state, action: PayloadAction<any[]>) => {
      state.blogCategories = action.payload;
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
    setHasVisited: (state, action: PayloadAction<boolean>) => {
      state.hasVisited = action.payload;
    },
    addPageToCache: (state, action: PayloadAction<string>) => {
      if (!state.pageCached.includes(action.payload)) {
        state.pageCached.push(action.payload);
      }
    },
    setPositionModels: (state, action: PayloadAction<any>) => {
      state.positions = action.payload;
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
  setProfile,
  setTags,
  setBlogs,
  setBlogCategories,
  setProjects,
  setInformationWorks,
  setInitProgress,
  setHasVisited,
  addPageToCache,
  setPositionModels,
  openModal,
  closeModal,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
