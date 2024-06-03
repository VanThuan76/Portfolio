"use client";
import Script from "next/script";

const LinkedinScript = () => {
  return (
    <>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      />
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="vu-van-thuan-002839224"
        data-version="v1"
      />
    </>
  );
};

export default LinkedinScript;
