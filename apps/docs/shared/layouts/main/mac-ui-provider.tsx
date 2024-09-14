"use client";

import React, { Fragment, useState, useCallback } from "react";

import { setHasSleep } from "@store/app-slice";
import { useAppDispatch, useAppSelector } from "@store/index";
import useBreakpoint from "@shared/hooks/use-break-point";

import MacStartupScreen from "@ui/organisms/mac-startup";
import MacSleepScreen from "@ui/organisms/mac-sleep";
import MacLaunchPadScreen from "@ui/organisms/mac-launchpad";


const MacUiProvider = React.memo(({ progress }: { progress: number }) => {
    const dispatch = useAppDispatch();
    const breakpoint = useBreakpoint();
    const { hasSleep, hasFullScreen } = useAppSelector((state) => state.app);
    const [swiped, setSwiped] = useState(false);

    const handleSuccess = useCallback(() => {
        dispatch(setHasSleep(false));
        setSwiped(false);
    }, [dispatch]);

    return (
        <Fragment>
            <MacStartupScreen
                size={breakpoint === "xs" ? "small" : "large"}
                logo="/logo.png"
                progress={progress}
                isActive={progress !== 100}
            />
            <MacSleepScreen
                logo="/logo.png"
                isActive={hasSleep}
                handleSuccess={handleSuccess}
                setSwiped={setSwiped}
                swiped={swiped}
            />
            <MacLaunchPadScreen
                isActive={!hasFullScreen}
                applications={[{ name: "Test", image: "/logo.png" }]}
            />
        </Fragment>
    );
});


export default MacUiProvider;
