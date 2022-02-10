import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LineGraph } from './LineGraph';
import { Box } from 'grommet';

export default {
  title: 'Example/LineGraph',
  component: LineGraph,
} as ComponentMeta<typeof LineGraph>;

const Template: ComponentStory<typeof LineGraph> = (args) => <LineGraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {

  data: [{x: 0,y: 1}, {x: 1,y: 3}, {x: 2,y: 5},{x: 3,y: 3},],
  xKey: "x",
  yKey: "y",
};

