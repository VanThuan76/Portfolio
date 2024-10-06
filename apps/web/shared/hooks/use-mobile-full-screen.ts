import { useEffect } from "react";
import useBreakpoint from "./use-break-point";

type BackgroundType = {
  imageUrl?: string;
  backgroundColor?: string;
};

const useFullScreenBackground = ({
  imageUrl,
  backgroundColor,
}: BackgroundType) => {
  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (breakpoint !== "xs" && breakpoint !== "sm") {
      return;
    }

    const updateBackground = () => {
      if (imageUrl) {
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundColor = "";
      } else if (backgroundColor) {
        document.body.style.backgroundImage = "";
        document.body.style.backgroundColor = backgroundColor;
      }
    };

    updateBackground();

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundColor = "";
    };
  }, [imageUrl, backgroundColor, breakpoint]);
};

export default useFullScreenBackground;
