// Button.stories.ts | Button.stories.tsx

import React from "react";

import { Meta } from "@storybook/react";

import { Timesheet } from "./Timesheet";

export default {
  component: Timesheet,
  title: "Example/Timesheet",
} as Meta;

export const Primary: React.VFC<{}> = () => <Timesheet />;
