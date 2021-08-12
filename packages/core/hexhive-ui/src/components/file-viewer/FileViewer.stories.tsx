import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FileViewer } from "./FileViewer";

const PDF = require("./test.pdf");

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
  files: [],
};

export const WithFiles = Template.bind({});
WithFiles.args = {
  files: [
    {
      url: PDF,
      id: "testing",
      mimeType: "pdf",
    },
  ],
};
