"use client";

import { Fragment, useState } from "react";

import { setHasSleep } from "@store/app-slice";
import { useAppDispatch, useAppSelector } from "@store/index";

import MacStartupScreen from "@ui/organisms/mac-startup";
import MacSleepScreen from "@ui/organisms/mac-sleep";
import MacLaunchPadScreen from "@ui/organisms/mac-launchpad";

const MacUiProvider = ({ progress }: { progress: number }) => {
  const dispatch = useAppDispatch();

  const { hasSleep, hasFullScreen } = useAppSelector((state) => state.app);

  const [swiped, setSwiped] = useState(false);

  return (
    <Fragment>
      <MacStartupScreen
        logo="/logo.png"
        progress={progress}
        isActive={progress === 100 ? false : true}
      />
      <MacSleepScreen
        logo="/logo.png"
        isActive={hasSleep}
        handleSuccess={() => {
          dispatch(setHasSleep(false));
          setSwiped(false);
        }}
        setSwiped={setSwiped}
        swiped={swiped}
      />
      <MacLaunchPadScreen
        isActive={!hasFullScreen}
        applications={[{ name: "Test", image: "/logo.png" }]}
      />
    </Fragment>
  );
};

export default MacUiProvider;
