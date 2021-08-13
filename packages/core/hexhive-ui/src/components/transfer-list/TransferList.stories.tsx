import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TransferList } from "./index";

export default {
  title: "Example/TransferList",
  component: TransferList,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof TransferList>;

const Template: ComponentStory<typeof TransferList> = (args) => (
  <TransferList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  assignedKey: 1,
  // assignedList: [x: 1][y: 1],

  labelKey: "testLabelKay",

  options: 1,
  // selected: any[];
};
