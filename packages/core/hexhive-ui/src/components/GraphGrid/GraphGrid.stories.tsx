import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GraphGrid } from './GraphGrid';
import { Box } from 'grommet';

export default {
  title: 'Example/GraphGrid',
  component: GraphGrid,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof GraphGrid>;

const Template: ComponentStory<typeof GraphGrid> = (args) => <GraphGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	layout: [{
		id: '1',
		label: 'label 1',
		total: 'total 1',
		x: 0,
		y: 0,
		w: 2,
		h: 2,
	}],
	children: (item) => (<Box>{item.id}</Box>)
};



export const CustomContainer = Template.bind({});
CustomContainer.args = {
	layout: [{
		id: '1',
		label: 'label 1',
		total: 'total 1',
		x: 0,
		y: 0,
		w: 2,
		h: 2,
	}],
	noWrap: true,
	children: (item) => (<Box>{item.id}</Box>),
};