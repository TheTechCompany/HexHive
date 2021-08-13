import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ManagerList } from "./index";
import { AvatarList } from "../avatar-list";
import { Avatar } from "grommet";

export default {
  title: "Example/ManagerList",
  component: ManagerList,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof ManagerList>;

const Template: ComponentStory<typeof ManagerList> = (args) => (
  <ManagerList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  managers: ["test", "test"],

  users: [AvatarList],
};
