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
Primary.args = {
  
  events: ISchedule[];

  users?: any[];
  user?: any
  token?: string;

  projects: any[];
  people: any[];
  equipment: any[]

  isLoading: boolean;

  date: Date;
  onHorizonChanged: (start: Date, end: Date) => void;
};
