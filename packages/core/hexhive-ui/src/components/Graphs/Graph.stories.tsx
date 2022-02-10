import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LineGraph } from './LineGraph';
import { PieGraph } from './PieGraph';
import { Box } from 'grommet';

export default {
  title: 'Example/Graph',
  component: LineGraph,
} as ComponentMeta<typeof LineGraph>;

const Template: ComponentStory<typeof LineGraph> = (args) => <LineGraph {...args} />;
const TemplatePie: ComponentStory<typeof PieGraph> = (args) => <PieGraph {...args} />;



export const Primary = Template.bind({});
Primary.args = {

  data: [{x: "Monday",y: 1}, {x: "Tuesday",y: 3}, {x: "Wednesday",y: 5},{x: "Thursday",y: 3},],
  xKey: "x",
  yKey: "y",
};

export const PieChart = TemplatePie.bind({});
PieChart.args = {

  dataKey: "value",
  nameKey: "name",

  data: [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ]
};
