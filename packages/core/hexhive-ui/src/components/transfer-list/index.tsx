import React, {
  Component, useState
} from 'react';

import { Button, List, Text, CheckBox, Box } from 'grommet'


export interface TransferListProps {
  onAdd?: any;
  onRemove?: any;

  assignedKey: any;
  assignedList: any[][];

  labelKey?: string;

  options: any;
  selected: any[];
}

// import './index.css';
export const TransferList : React.FC<TransferListProps> = (props) => {  
  const [ selectedLeft, setLeft ] = useState<any[]>([])
  const [ selectedRight, setRight ] = useState<any[]>([])



  const _addToDeselection = (item: any) => {
    let selected = selectedRight;
    if(!selected.includes(item)){
      selected.push(item)
    }else{
      var ix = selected.indexOf(item);
      selected.splice(ix, 1);
    }
    setRight(selected)
  }

  const _addToSelection = (item: any) => {
    let selected = selectedLeft;
    if(!selected.includes(item)){
      selected.push(item)
    }else{
      var ix = selected.indexOf(item);
      selected.splice(ix, 1);
    }
    setLeft(selected)
  } 

  const checkAssigned = (item: any) => { 
    var num = 0;

    props.assignedList.forEach((x) => {
      x.forEach((y) => {
        if(y[props.assignedKey] == item[props.assignedKey])
          num ++;
      });
    });

    if(num > 0){
      return (
      <Box>
        <div className="number-badge">
          {num}
        </div>
      </Box>
      );
    }else{
      return null;
    }
  }

  const _renderOptions = () => {
    return not(props.options, props.selected).map((x, ix) => [(
      <Box
        direction="row"
        key={'options' + ix}
        onClick={() => _addToSelection(x)}
        >
        <CheckBox 
          checked={selectedLeft.includes(x)}
          tabIndex={-1}
           />
        <Text>
          {x[props.labelKey || '']}
        </Text>
        {(props.assignedList) ? checkAssigned(x) : null}
      </Box>
    ), (<Box />)])
  }

  const _renderSelection = () => {
    return props.selected.map((x, ix) => (
      <Box
        direction="row"
        key={'selection' + ix}
        onClick={() => _addToDeselection(x)}>
        <CheckBox
          checked={selectedRight.includes(x)}
          tabIndex={-1}
           />
        <Text>{x[props.labelKey || '']}</Text>
      </Box>
    ))
  }
  

  const _addToOutput = () => {
    props.onAdd?.(selectedLeft);
    setLeft(selectedLeft)
  }

  const _addToInput = () => {
    props.onRemove?.(selectedRight);
    setRight(selectedRight)
  }

  const not = (a: any[], b: any[]) => {
    return a.filter(value => {
      return b.map((x) => x.ID).indexOf(value.ID) === -1
    });
  }


    return (
      <div className="dnd-list">
        <div className="input-options">
          <List
            >
            {_renderOptions()}
          </List>
        </div>
        <div className="dnd-controls">
          <Button 
            disabled={selectedLeft.length <= 0} 
            size="small"
            onClick={_addToOutput.bind(this)}>
            &gt;
          </Button>
          <Button 
            disabled={selectedRight.length <= 0} 
            size="small"
            onClick={_addToInput.bind(this)}>
            &lt;
          </Button>
        </div>
        <div className="output-options Droppable">
          <List>
            {_renderSelection()}
          </List>
        </div>
      </div>  
    );
  
}
