import { Button } from "@repo/editor/components/button";
import { InfiniteSlider } from "@repo/design-system/components/molecules/effects/infinite-slider";

import CardFarme from "../components/icons/card-frame";

const ProjectOutstanding = () => {
  return (
    <section
      id="project-outstanding"
      className="flex flex-col items-center justify-center px-4 pb-6 mt-24 md:p-12 lg:px-24 lg:pb-24"
    >
      <div className="flex flex-col items-center justify-center gap-2 max-w-fit">
        <h2 className="text-xl font-bold md:text-3xl">
          Ecomgrows® is a technology and strategic design agency based in
          Vietnam.
        </h2>
        <p className="text-sm text-center md:text-base">
          We transform™ brands with a humanistic and meaningful purpose,
          shaping iconic identity and evoking intense emotions in clarity of
          communication through insightful and carefully crafted designs to
          bring the brand to life.
        </p>
      </div>
      <Button className="mt-5">Meet Our Amazing Team</Button>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] w-full max-w-max">
        <InfiniteSlider durationOnHover={0} direction={"horizontal"}>
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="relative aspect-square w-[250px] md:w-[275px]"
            >
              <CardFarme className="w-full" />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default ProjectOutstanding;
