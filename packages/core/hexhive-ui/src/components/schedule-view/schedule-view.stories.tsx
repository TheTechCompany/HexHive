import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ScheduleView } from "./index";

export default {
  title: "Example/ScheduleView",
  component: ScheduleView,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof ScheduleView>;

const Template: ComponentStory<typeof ScheduleView> = (args) => (
  <ScheduleView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
