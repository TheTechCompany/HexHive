import React, {
  Component
} from 'react';

import { ScheduleView } from '@hexhive/ui';
import './index.css';
import { useQuery } from '../../gqless';

export const Schedule : React.FC<any> = (props) =>  {

  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: true
  })

  const projects = query.ProjectMany();

    return (
      <div className="schedule-container">
        <ScheduleView 
          user={{}}
          projects={projects || []}
          people={[]}
          equipment={[]}
          isLoading={false}/>
      </div>
    );

}
