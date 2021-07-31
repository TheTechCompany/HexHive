import React, {
  Component
} from 'react';

import { ScheduleView } from '@hexhive/ui';
import './index.css';
import { mutation, useMutation, useQuery } from '../../gqless';

export const Schedule : React.FC<any> = (props) =>  {

  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: true
  })

  const schedule = query.ScheduleMany()

  const projects = query.ProjectMany()?.map((x) => ({...x}));
  const people = query.PeopleMany()?.map((x) => ({...x})) || [];
  const equipment = query.EquipmentMany()?.map((x) => ({...x})) || []

  const [createItem, info] = useMutation((mutation, args: {item: any}) => {
    const result = mutation.createScheduleItem({item: args.item})
    return {
      item: result,
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.ScheduleMany()],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  console.log("Schedule view");

    return (
      <div className="schedule-container">
        <ScheduleView 

          onCreateItem={(item, ts) => {
            createItem({args: {
              item: {
              ...item,
              date: new Date(ts.valueOf())
            }}})

          }}
          user={{}}
          projects={projects || []}
          people={people}
          equipment={equipment}
          isLoading={false}/>
      </div>
    );

}
