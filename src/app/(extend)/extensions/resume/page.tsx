import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "@/lib/tw";
import { FileText } from "lucide-react";

import { Separator } from "@/components/plate-ui/separator";
import { TypographyH3 } from "@/components/ui/typography-h3";
import { TypographyP } from "@/components/ui/typography-p";
import { readInformationTask } from "@/server/actions/information";
import { LoaderImage } from "@/components/custom/loader-image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SkeletonCard } from "@/components/custom/skeleton-card";
import TransitionCpn from "@/components/custom/transition-cpn";

import FormTouch from "./@components/form-touch";
import GithubCalendar from "@/components/custom/github-calendar";

const LinkedinScript = dynamic(() => import("./@components/linkedin-script"), {
  loading: () => <SkeletonCard />,
  ssr: false,
});

export default async function Page() {
  const { data: informationTasks } = await readInformationTask();

  return (
    <div className="w-full min-h-screen md:h-screen grid grid-cols-1 md:grid-cols-3 justify-center items-center p-4 gap-12">
      <TransitionCpn className="w-full h-screen flex flex-wrap justify-start items-start gap-2 overflow-hidden">
        <div className="space-y-2">
          <LinkedinScript />
          <Link
            className="w-[150px] border light:border-zinc-50 dark:border-gray-50 rounded-md shadow-sm flex justify-start items-start gap-2 py-1 px-2 cursor-pointer hover:scale-y-105 transition-all ease-in-out mr-auto"
            href="https://read.cv/austinvu"
          >
            <FileText className="rotate-45 w-[30px] h-[30px] shadow-lg p-1 rounded-full" />
            <TypographyP
              className="font-thin italic text-sm"
              title="CV online"
            />
          </Link>
        </div>
        <Separator className="w-full" />
        <TypographyH3 title="GET IN TOUCH" />
        <FormTouch />
      </TransitionCpn>
      <TransitionCpn
        variants={{
          hidden: { opacity: 0, x: 0, y: -200 },
          enter: { opacity: 1, x: 0, y: 0 },
        }}
        className="w-full h-screen col-span-1 md:col-span-2 overflow-hidden rounded-md space-y-4"
      >
        <TypographyH3 title="🚴🏻 Explore" />
        <GithubCalendar username="vanthuan76" />
        <TypographyH3 title="💼 Work" />
        <BentoGrid className="grid justify-start items-start w-full h-[500px] md:h-full overflow-y-auto">
          {informationTasks ? (
            informationTasks
              .map((informationTask) => ({
                title: informationTask?.title_company,
                description: informationTask?.task_company,
                icon: informationTask?.image_company,
                header: (
                  <div className="w-full h-full overflow-hidden">
                    <LoaderImage
                      isLoader={false}
                      src={informationTask?.image_project_company as string}
                      alt={informationTask?.title_company as string}
                      width={500}
                      height={150}
                      className="w-full h-full object-cover object-center rounded-lg"
                    />
                  </div>
                ),
              }))
              .map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={
                    <Avatar>
                      <AvatarImage
                        src={item.icon as string}
                        alt="@shadcn"
                        className="shadow-sm"
                      />
                    </Avatar>
                  }
                  typeStyleImage="bottom"
                  className={cn(
                    i % 2 === 0 ? "md:col-span-2" : "md:col-span-1",
                    "border border-zinc-200/50 shadow-sm h-[300px]",
                  )}
                />
              ))
          ) : (
            <div className="w-full flex flex-wrap justify-start items-start gap-5">
              <SkeletonCard />
              <SkeletonCard />
            </div>
          )}
        </BentoGrid>
      </TransitionCpn>
    </div>
  );
}
