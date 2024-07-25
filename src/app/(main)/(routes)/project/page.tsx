import React from "react";
import TransitionCpn from "@/components/custom/transition-cpn";
import CardProjectDesktop from "./@components/card-project-desktop";
import CardProjectMobile from "./@components/card-project-mobile";
import { readProject } from "@/server/actions/project";

export default async function Page() {
  let { data: projects } = await readProject();
  if (!projects?.length) {
    projects = [];
  }
  if (!projects) return <React.Fragment></React.Fragment>;
  return (
    <TransitionCpn className="w-full h-full col-span-2">
      <CardProjectMobile projects={projects} />
      <CardProjectDesktop projects={projects} />
    </TransitionCpn>
  );
}
