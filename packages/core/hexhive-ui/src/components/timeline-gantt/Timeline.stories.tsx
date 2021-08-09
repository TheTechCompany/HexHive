import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Timeline } from './TimeLine';
import { Grommet } from 'grommet';
import { BaseStyle } from '@hexhive/styles';
import { useState } from 'react';
import moment from 'moment';

export default {
  title: 'Example/Timeline',
  component: Timeline,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => {
  const [ data, setData ] = useState<any>(args.data || [])
  const [ date, setDate ] = useState<Date>(new Date())
 return <Grommet 
    style={{display: 'flex', flex: 1}}
    theme={BaseStyle}>
    <Timeline {...args} data={data} onUpdateTask={(task: any, position: any) => {
      console.log("Updaate")
      let d = data.slice()
      let ix = d.map((x: any) => x.id).indexOf(task.id)
      d[ix].start = position.start;
      d[ix].end = position.end;

      setData(d)
    } } date={date} onDateChange={setDate} />
  </Grommet>;
}

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  color: 'green',
  size: '10px',
};

export const WithItems = Template.bind({});
WithItems.args = {
  date: new Date(),
  data: [
    {id: '1', start: new Date(2021, 7, 12), end: new Date(2021, 11, 12), name: "Item 1", color: 'red', showLabel: true},
    {id: '2', start: new Date(2021, 6, 12), end: new Date(2021, 10, 12), name: "Item 1", color: 'red', showLabel: true},
    {id: '3', start: new Date(2021, 5, 12), end: new Date(2021, 9, 12), name: "Item 1", color: 'red', showLabel: true}
  ],
  primary: true,
  color: 'green',
  size: '10px',
  dayStatus: (day: Date) => {
    console.log("Day", day)
    return 'red';
  }
};

export const HeaderColors = Template.bind({});
HeaderColors.args = {
  date: new Date(),
  data: [
    {
      id: '1', 
      start: new Date(2021, 7, 12), 
      end: new Date(2021, 11, 12),
      name: "Item 1", 
      color: 'red', 
      showLabel: true
    },
    {
      id: '2', 
      start: new Date(2021, 6, 12), 
      end: new Date(2021, 10, 12),
      name: "Item 1", 
      color: 'red', 
      showLabel: true
    },
    {
      id: '3', 
      start: new Date(2021, 5, 12),
      end: new Date(2021, 9, 12),
      name: "Item 1", 
      color: 'red', 
      showLabel: true
    }
  ],
  primary: true,
  color: 'green',
  size: '10px',
  dayStatus: (day: Date) => {
    let weekEnd = moment(day).isoWeekday() == 6 || moment(day).isoWeekday() == 7
    console.log("Day", day)
    return weekEnd ? 'green' : 'orange';
  }
};



export const ResizableSplitter = Template.bind({});
ResizableSplitter.args = {
  resizable: true,
  color: 'green',
  size: '10px',
};


