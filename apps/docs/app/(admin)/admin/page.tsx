import * as React from "react";

import { authAdminServer } from "@server/actions/auth";

import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";
export default async function Page() {
  const user = await authAdminServer();
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <TypographyH3
        title={("Welcome to " + user.user_metadata.full_name) as string}
      />
    </div>
  );
}
