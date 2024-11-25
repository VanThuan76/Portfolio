// import dynamic from "next/dynamic";
// import { Suspense } from "react";
// import { fontHome } from "@shared/utils/font";

// import { cn } from "@repo/design-system/utils/tw";
// import { useBreakpoint } from "@repo/hooks";

// import FlickeringGrid from "@repo/design-system/components/molecules/frame/flickering-grid";

// const Model = dynamic(
//     () => import("@repo/3d-visualization/model").then((mod) => mod.Model),
//     { ssr: false },
// );
// const View = dynamic(
//     () => import("@repo/3d-visualization/view").then((mod) => mod.View),
//     {
//         ssr: false,
//     },
// );
// const Common = dynamic(
//     () => import("@repo/3d-visualization/view").then((mod) => mod.Common),
//     { ssr: false },
// );
// const EffectComposerHandler = dynamic(
//     () =>
//         import("@repo/3d-visualization/view").then(
//             (mod) => mod.EffectComposerHandler,
//         ),
//     { ssr: false },
// );
// const CameraRigHandler = dynamic(
//     () =>
//         import("@repo/3d-visualization/view").then((mod) => mod.CameraRigHandler),
//     { ssr: false },
// );

type Params = Promise<{ locale: string }>;

export default async function Page({ params }: { params: Params }) {
  return (
    <div className="grid w-full h-full place-items-center">Comming soon</div>
    // <div
    //     className={cn(
    //         "relative grid items-center justify-between w-full h-screen grid-cols-2 mx-auto overflow-hidden",
    //         fontHome.className,
    //     )}
    //     data-lenis-prevent="true"
    // >
    //     <View className="absolute top-0 right-0 z-20 flex flex-col items-center justify-center w-full h-full">
    //         <Suspense fallback={null}>
    //             <Common />
    //             <Model
    //                 position={
    //                     ["xs", "sm"].includes(breakpoint)
    //                         ? [0, 30, -150]
    //                         : [-30, 30, -150]
    //                 }
    //                 scale={
    //                     ["xs", "sm"].includes(breakpoint) ? [7, 7, 7] : [10, 10, 10]
    //                 }
    //             />
    //             <EffectComposerHandler />
    //             <CameraRigHandler />
    //         </Suspense>
    //     </View>

    //     <div className="absolute z-30 text-6xl italic font-black leading-none tracking-widest translate-x-1/2 md:text-9xl bottom-1/2 right-1/3 md:right-1/4">
    //         <span className="text-white underline">AUSTIN</span>
    //         <span className="block text-right">VU</span>
    //     </div>

    //     <FlickeringGrid
    //         className="absolute inset-0 z-0 w-full h-full"
    //         squareSize={2}
    //         gridGap={6}
    //         color="#6B7280"
    //         maxOpacity={0.3}
    //         flickerChance={0.1}
    //         height={1280}
    //         width={1980}
    //     />
    // </div>
  );
}
