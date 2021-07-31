import React from 'react'
import { List, Box, Button, TextInput } from 'grommet';

import { Close, Add } from 'grommet-icons'

export interface NoteTabProps {
  data?: any[];
  onChange?: Function;
}

const NoteTab: React.FC<NoteTabProps> = (props) => {

  const _onChange = (ix: number, val: string) => {
    let data = props.data?.slice() || []
    data[ix] = val;
    props.onChange?.(data);
  }


  const _insertEmpty = () => {
    let data = props.data?.slice() || [];
    data.push('')
    props.onChange?.(data)
  }

  const _removeItem = (index: number) => {
    let data = props.data?.slice() || [];
    data.splice(index, 1);
    props.onChange?.(data);
  }

  return (
    <Box overflow={"scroll"} height={{min: '50vh'}} className="note-tab">
      <List
        pad={{vertical: 'xsmall'}}
        data={props.data}>
        {(item: any, index: number) => (
          <Box direction="row" align="center">
            <TextInput
              autoFocus
              focusIndicator={false}
              value={item}
              placeholder="Enter note here..."
              onKeyDown={(e) => { if (e.key == 'Enter') { _insertEmpty() } }}
              onChange={(e) => _onChange(index, e.target.value)}
            />
            <Button hoverIndicator icon={<Close />} onClick={() => _removeItem(index)} />
          </Box>
        )}
      </List>
      <Button onClick={_insertEmpty}
        icon={<Add />} label="Add Note" />
    </Box>
  );

}

export default NoteTab;