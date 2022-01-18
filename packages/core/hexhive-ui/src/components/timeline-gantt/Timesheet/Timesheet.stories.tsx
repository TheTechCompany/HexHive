import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Timesheet } from "./Timesheet";

export default {
  component: Timesheet,
  title: "Example/Timesheet",
};

const Template: ComponentStory<typeof Timesheet> = (args) => (
  <Timesheet {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  timesheetData: [{ name: "bob", hours: 76 }],
};
