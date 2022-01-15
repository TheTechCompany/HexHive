import React, { useRef, useState } from "react";
//import useState from 'storybook-addon-state'
import { Story, Meta, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TextInput } from "grommet";
import {
    ERPModal, 
    ERPModalProps
} from ".";

export default {
  title: "Example/ERPModal",
  component: ERPModal,
} as Meta;


const Template: Story<ERPModalProps> = (args) => (
  <ERPModal {...args} />
);

export const OpenModal = Template.bind({});
OpenModal.args = {
    open: true
}
