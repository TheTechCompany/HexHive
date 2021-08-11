import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FileViewer } from "./FileViewer";

export default {
  title: "Example/FileViewer",
  component: FileViewer,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof FileViewer>;

const Template: ComponentStory<typeof FileViewer> = (args) => (
  <FileViewer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  file: [],
};
