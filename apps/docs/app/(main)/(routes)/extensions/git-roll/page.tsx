"use client";
import FadeWrapper from "@ui/molecules/frame/fade-wrapper";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";

export default function Page() {
  return (
    <FadeWrapper className="relative w-full h-full m-auto overflow-hidden rounded-lg">
      <MotionContainer delay={0.3} type="blur">
        <iframe
          src="https://gitroll.io/profile/uETO2ZYmEUMYfSThHUZHaN8jX6cj2"
          frameBorder="0"
          style={{
            overflow: "hidden",
            overflowX: "hidden",
            overflowY: "hidden",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "10px",
          }}
        />
      </MotionContainer>
    </FadeWrapper>
  );
}
