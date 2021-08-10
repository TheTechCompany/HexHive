import React, {useRef, useState} from 'react';
//import useState from 'storybook-addon-state'
import { Story, Meta, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { TextInput } from 'grommet';
import { InfiniteCanvas, InfiniteCanvasProps, ZoomControls } from './InfiniteCanvas';
import { ActionNodeFactory, IconNodeFactory, StartNodeFactory } from './components/nodes';

export default {
  title: 'Example/InfiniteCanvas',
  component: InfiniteCanvas,
} as Meta;


const ControlledTemplate : Story<InfiniteCanvasProps> = (args) => {

  return ((props) => {
    const [ nodes, setNodes ] = useState(args.nodes || [])
    const pathRef = useRef<any[]>(args.paths || [])
    const [ paths, _setPaths ] = useState(args.paths || []) //args.paths
  
    const setPaths = (items: any[]) => {
      pathRef.current = items;
      _setPaths(items)
    }

    return (
    <InfiniteCanvas 

     {...args}
      nodes={nodes}
      paths={pathRef.current}
      onNodeUpdate={(node) => {
        action("onNodesChanged")
        let p = nodes.slice()
        let p_ix = p.map((x) => x.id).indexOf(node.id)

        p[p_ix] = {
          ...p[p_ix],
          ...node
        }

        setNodes(p)
        //setNodes(nodes)
      }}
      onPathCreate={(path) => {
        console.log('onPathCreate')

        let p = pathRef.current.slice()
        p.push(path)
        setPaths(p)
        console.log(p)
        // action('onPathsChanged')
        // setPaths(paths)
      }}
      onPathUpdate={(path) => {
        console.log('onPathUpdate', path)
          let p = pathRef.current.slice()
          let p_ix = p.map((x) => x.id).indexOf(path.id)

          p[p_ix] = {
            ...p[p_ix],
            ...path
          }

          setPaths(p)
      }}>

    <ZoomControls anchor={{horizontal: 'right', vertical: 'bottom'}} />
    </InfiniteCanvas>
  )})(args)
}

const Template: Story<InfiniteCanvasProps> = (args) => <InfiniteCanvas {...args}>

  <ZoomControls anchor={{horizontal: 'right', vertical: 'bottom'}} />
</InfiniteCanvas>;

export const NodeOptions = Template.bind({});
NodeOptions.args = {
  editable: true,
  style: {
    background: 'green',
    lineColor: 'gray'
  },
  factories: [new ActionNodeFactory(), new IconNodeFactory(), new StartNodeFactory()],
  nodes: [
    {
      id: '1',
      type: 'action-node',
      x: 20,
      y: 20
    },
    {
      id: '2',
      type: 'icon-node',
      extras: {
        icon: "Next",
        color: "purple"
      },
      x: 200,
      y: 20
    },
    {
      id: '3',
      type: 'start-node',
      extras: {
        
      },
      x: 300,
      y: 20
    }
  ]
};

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  editable: true,
  factories: [new ActionNodeFactory()],
  nodes: [
    {
      id: '1',
      type: 'action-node',
      x: 20,
      y: 20
    }
  ]
};


export const Controlled = ControlledTemplate.bind({});
Controlled.args = {
  grid: {width: 100, height: 100, divisions: 5},
  snapToGrid: true,
  editable: true,
  factories: [new ActionNodeFactory(), new IconNodeFactory()],
  nodes: [
    {
      id: '1',
      type: 'action-node',
      menu: (<div>
        <TextInput placeholder="Width" type="number" />
        <TextInput placeholder="Height" type="number" />
      </div>),
      x: 371,
      y: 173
    },
    {
      id: '2',
      type: 'action-node',
      menu: (<div></div>),
      x: 20,
      y: 100
    },
    {
      id: '3',
      type: 'icon-node',
      extras: {
        label: "Run",
        icon: "Next",
        color: "purple"
      },
      x: 200,
      y: 20
    },
    {
      id: '5',
      type: 'icon-node',
      extras: {
        icon: "Next",
        color: "purple"
      },
      x: 300,
      y: 20
    }
  ],
  paths: [
    {
      id: '2',
      points: [{x: 100, y: 100}],
      source: '1',
      sourceHandle: 'inlet'
    }
  ]
};


