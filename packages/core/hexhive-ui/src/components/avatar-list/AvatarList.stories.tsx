import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AvatarList } from "./index";

export default {
  title: "Example/AvatarList",
  component: AvatarList,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof AvatarList>;

const Template: ComponentStory<typeof AvatarList> = (args) => (
  <AvatarList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  users: [{ name: "Gertrude", color: "Plum" }],

  size: 40,
};

export const Secondary = Template.bind({});
Secondary.args = {
  users: [{ name: "Mary", color: "Aquamarine" }],

  size: 60,
};
