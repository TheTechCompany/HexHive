import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PieGraph } from './PieGraph';
import { Box } from 'grommet';

export default {
  title: 'Example/PieGraph',
  component: PieGraph,
} as ComponentMeta<typeof PieGraph>;

const Template: ComponentStory<typeof PieGraph> = (args) => <PieGraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {

  data: [{x: 0,y: 1}, {x: 1,y: 3}, {x: 2,y: 5},{x: 3,y: 3},],
  xKey: "x",
  yKey: "y",
};

