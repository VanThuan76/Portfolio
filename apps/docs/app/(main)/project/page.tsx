"use client";

import React from "react";
import { useAppSelector } from "@store/index";

import CardProjectDesktop from "./@components/card-project-desktop";
import CardProjectMobile from "./@components/card-project-mobile";

export default function Page() {
    const { projects } = useAppSelector((state) => state.app);

    return (
        <div className="w-full h-full">
            <CardProjectDesktop projects={projects} />
            <CardProjectMobile projects={projects} />
        </div>
    );
}
