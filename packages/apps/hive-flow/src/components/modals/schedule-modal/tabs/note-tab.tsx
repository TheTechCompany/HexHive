import React, {
  Component
} from 'react';

import NotedList from '../../../primatives/noted-list'

export interface NoteTabProps {
  data?: any[];
  onChange?: Function;
}

const NoteTab : React.FC<NoteTabProps> = (props) => {
 
    return (
      <div className="note-tab">
        <NotedList 
          data={props.data} 
          onChange={props.onChange}/>
      </div>
    );
  
}

export default NoteTab;