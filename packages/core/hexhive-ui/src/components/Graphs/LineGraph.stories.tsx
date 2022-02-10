import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LineGraph } from './LineGraph';
import { Box } from 'grommet';

export default {
  title: 'Example/LineGraph',
  component: LineGraph,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof LineGraph>;

const Template: ComponentStory<typeof LineGraph> = (args) => <LineGraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {

  data: [0, 1, 1, 3],

  xKey: "x",
  yKey: "y",
};

