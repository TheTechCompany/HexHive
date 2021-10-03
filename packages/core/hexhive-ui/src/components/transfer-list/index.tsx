import React, {
  Component, useState
} from 'react';

import { Button, List, Text, CheckBox, Box } from 'grommet'
import { Next, Previous } from 'grommet-icons'
import { useMemo } from 'react';

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
    let selected = selectedRight.slice();
    if(!selected.includes(item)){
      selected.push(item.id)
    }else{
      var ix = selected.indexOf(item.id);
      selected.splice(ix, 1);
    }
    setRight(selected)
  }

  const _addToSelection = (item: any) => {
    let selected = selectedLeft.slice();
    if(!selected.includes(item.id)){
      selected.push(item.id)
    }else{
      var ix = selected.indexOf(item.id);
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
    setLeft([])
  }

  const _addToInput = () => {
    props.onRemove?.(selectedRight);
    setRight([])
  }

  const not = (a: any[], b: any[]) => {
    return a.slice().filter(value => {
      return b.indexOf(value.id) === -1
    });
  }


    return (
      <Box 
        direction="row">
        <Box flex overflow="scroll">
          <List
            onClickItem={({item}: any) => _addToSelection(item)}
            data={not(props.options, props.selected)}
            primaryKey="name"
            >
            {(item: any) => (
              <Box direction="row" align="center">
                <CheckBox checked={selectedLeft.indexOf(item.id) > -1} onChange={(e) => _addToSelection(item)} />
                <Text margin={{left: 'small'}}>{item.name}</Text>
              </Box>
            )}
          </List>
        </Box>
        <Box 
          justify="center"
          direction="column">
          <Button 
            icon={<Next />}
            disabled={selectedLeft.length <= 0} 
            size="small"
            onClick={_addToOutput} />
          <Button 
            icon={<Previous />}
            disabled={selectedRight.length <= 0} 
            size="small"
            onClick={_addToInput} />
        </Box>
        <Box flex overflow="scroll">
          <List
            primaryKey="name"
            onClickItem={({item}: any) => _addToDeselection(item)}
            data={props.selected}>
            {(item: any) => (
              <Box direction="row" align="center">
                <CheckBox checked={selectedRight.indexOf(item.id) > -1} onChange={(e) => _addToDeselection(item)}/>
                <Text margin={{left: 'small'}}>{item[props.labelKey || '']}</Text>
              </Box>
            )}
          </List>
        </Box>
      </Box>  
    );
  
}
