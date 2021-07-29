import React, {
  Component
} from 'react';

import { ScheduleView } from '@hexhive/ui';
import './index.css';

export default class Schedule extends Component {
  render(){
    return (
      <div className="schedule-container">
        <ScheduleView 
          user={{}}
          jobs={[]}
          isLoading={false}/>
      </div>
    );
  }
}
