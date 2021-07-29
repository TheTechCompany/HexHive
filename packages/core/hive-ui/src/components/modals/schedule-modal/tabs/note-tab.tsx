import React from 'react'
import { List, Box, Button, TextInput } from 'grommet';

import { Clear, Add } from 'grommet-icons'

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
    <div className="note-tab">
      <List
        data={props.data}>
        {(item: any, index: number) => (
          <Box>
            <TextInput
              value={item}
              placeholder="Enter note here..."
              onKeyDown={(e) => { if (e.key == 'Enter') { _insertEmpty() } }}
              onChange={(e) => _onChange(index, e.target.value)}
            />
            <Button icon={<Clear />} onClick={() => _removeItem(index)} />
          </Box>
        )}
      </List>
      <Button onClick={_insertEmpty}
        icon={<Add />} label="Add Note" />
    </div>
  );

}

export default NoteTab;