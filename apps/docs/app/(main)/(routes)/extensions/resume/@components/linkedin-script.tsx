"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

import { SkeletonCard } from "@ui/molecules/cards/skeleton-card";

const LinkedinScript = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkScriptLoaded = () => {
      // @ts-ignore
      if (window.IN) {
        // @ts-ignore
        window.IN.Event.on(window.IN, "systemReady", () => {
          setLoading(false);
        });
      }
    };

    checkScriptLoaded();
  }, []);

  return (
    <>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
        onLoad={() => setLoading(false)}
      />
      {loading ? (
        <SkeletonCard />
      ) : (
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme="light"
          data-type="HORIZONTAL"
          data-vanity="vu-van-thuan-002839224"
          data-version="v1"
        />
      )}
    </>
  );
};

export default LinkedinScript;
