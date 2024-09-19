'use client'

import React, { useEffect } from 'react';
import { useAppDispatch } from '@store/index';
import { setHasFullScreen } from '@store/app-slice';

import HorizontalScroll from '@ui/organisms/scroll/horizontal-scroll';

const Page = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setHasFullScreen(true));
    }, [])

    return (
        <HorizontalScroll />
    );
};

export default Page;
