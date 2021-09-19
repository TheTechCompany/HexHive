import React, { useRef, useState } from "react";
//import useState from 'storybook-addon-state'
import { Story, Meta, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TextInput } from "grommet";
import {
    FileExplorer, FileExplorerProps
} from "./FileExplorer";

export default {
  title: "Example/FileExplorer",
  component: FileExplorer,
} as Meta;


const Template: Story<FileExplorerProps> = (args) => (
  <FileExplorer {...args} />
);

export const Files = Template.bind({});
Files.args = {
    files: [
        {name: 'Test.pdf', size: 22000},
        {name: 'Test.pdf', size: 22000},
        {name: 'Test.pdf', size: 22000},
        {name: 'Test.pdf', size: 22000}
    ]
}

export const Uploads = Template.bind({});
Uploads.args = {
    files: [
        {name: 'Test.pdf', size: 22000},
        {name: 'Test.pdf', size: 22000},
        {name: 'Test.pdf', size: 22000},
        {name: 'Test.pdf', size: 22000}
    ],
    uploading: [
      {name: 'File', percent: 20}
    ]
}