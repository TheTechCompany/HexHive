import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Kanban } from "./Kanban";

export default {
  title: "Example/Kanban",
  component: Kanban,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Kanban>;

const Template: ComponentStory<typeof Kanban> = (args) => <Kanban {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  columns: [{ id: "1", title: "column", rows: [] }],
};

export const WithCards = Template.bind({});
WithCards.args = {
  columns: [
    {
      id: "1",
      title: "column",
      rows: [
        {
          name: "two",
        },
      ],
    },
    {
      id: "2",
      title: "column2",
      rows: [
        {
          name: "three",
        },
        {
          name: "fsdf",
        },
      ],
    },
  ],
  renderCard: (item: any) => <div>{item.name}</div>,
};
