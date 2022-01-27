import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColorDot } from './ColorDot';

export default {
  title: 'Example/ColorDot',
  component: ColorDot,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof ColorDot>;

const Template: ComponentStory<typeof ColorDot> = (args) => <ColorDot {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'green',
  size: 10,
};
