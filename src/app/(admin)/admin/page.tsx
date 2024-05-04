import { TypographyH3 } from "@/components/ui/typography-h3";
import { currentProfile } from "@/server/actions/auth";
import * as React from "react";
export default async function Page() {
  const user = await currentProfile();
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <TypographyH3
        title={("Welcome to " + user.user_metadata.full_name) as string}
      />
    </div>
  );
}
