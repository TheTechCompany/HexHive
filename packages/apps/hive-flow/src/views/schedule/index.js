import React, {
  Component
} from 'react';

import ScheduleView from '../../components/workhub/schedule-view';
import './index.css';

export default class Schedule extends Component {
  render(){
    return (
      <div className="schedule-container">
        <ScheduleView />
      </div>
    );
  }
}
