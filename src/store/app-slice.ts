import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IDefaultState {
    showNavbarMenu: boolean;
    hasFullScreen: boolean;
}

const initialState: IDefaultState = {
    showNavbarMenu: false,
    hasFullScreen: false,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setShowNavBarMenu: (state, action: PayloadAction<boolean>) => {
            state.showNavbarMenu = action.payload;
        },
        setHasFullScreen: (state, action: PayloadAction<boolean>) => {
            state.hasFullScreen = action.payload;
        },
    },
});

export const { setShowNavBarMenu, setHasFullScreen } = appSlice.actions;
export const appReducer = appSlice.reducer;