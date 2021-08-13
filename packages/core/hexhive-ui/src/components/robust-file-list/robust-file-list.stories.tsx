import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RobustFileList } from "./index";

export default {
  title: "Example/RobustFileList",
  component: RobustFileList,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof RobustFileList>;

const Template: ComponentStory<typeof RobustFileList> = (args) => (
  <RobustFileList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  files: [
    {
      _id: "id",
      name: "testname",
      cid: "cid",
    },
  ],

  cols: 2,
};
