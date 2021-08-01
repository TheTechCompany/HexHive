import React, {
  Component, useState
} from 'react';
import { Box } from 'grommet'
import { ScheduleView } from '@hexhive/ui';
import './index.css';
import { mutation, useRefetch, useMutation, useQuery, resolved } from '../../gqless';
import moment from 'moment';

export const Schedule : React.FC<any> = (props) =>  {

  const [ horizon, setHorizon ] = useState<{start: Date, end: Date}>({
    start: new Date( moment(new Date()).startOf('isoWeek').valueOf() ),
    end: new Date( moment(new Date()).add('1', 'week').valueOf() )
  })

  const refetch = useRefetch();

  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: false,
  
  })

  const schedule = query.ScheduleMany() //{startDate: horizon.start, endDate: horizon.end}) //?.map((x) => ({...x, project: x?.project})) || [];

  const projects = query.ProjectMany()?.map((x) => ({...x})) || [];
  const people = query.PeopleMany()?.map((x) => ({...x})) || [];
  const equipment = query.EquipmentMany()?.map((x) => ({...x})) || []

  const users = query.UserMany?.map((x) => ({...x})) || []

  const [createItem, info] = useMutation((mutation, args: {item: any}) => {
    const result = mutation.createScheduleItem({item: args.item})
    return {
      item: {
        ...result
      },
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.ScheduleMany()],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [updateItem, infoItem] = useMutation((mutation, args: {id: string, item: any}) => {
    const result = mutation.updateScheduleItem({id: args.id, item: args.item})
    return {
      item: {
        ...result
      },
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.ScheduleMany({startDate: horizon.start, endDate: horizon.end})],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  console.log("Schedule view", schedule);

    return (
      <Box flex className="schedule-container">
        <ScheduleView 
          date={horizon.start}
          onHorizonChanged={async (start, end) => {
            console.log("Horizon", start, end)
            setHorizon({start, end})
            const info = await refetch(query.ScheduleMany({startDate: start, endDate: end}))
            
              console.log("REFETCH", info)
          
          }}
          events={(schedule || []).map((x) => ({
            id: x?.id || '',
            people: x?.people || [],
            equipment: x?.equipment || [],
            project: {name: x?.project?.name?.toString() || '', id: x?.project?.id?.toString() || ''},
            notes: x?.notes || [],
            managers: x?.managers || [],
            date: x?.date,
            owner: {id: x?.owner?.id?.toString() || '', name: x?.owner?.name?.toString() || ''}
          }))}
          onCreateItem={(item, ts) => {
            createItem({args: {
              item: {
              ...item,
              date: new Date(ts.valueOf())
            }}}).then(async (data) => {
              //await refetch(() => query.ScheduleMany)
            })
          }}

          onSaveItem={(item, ts) => {
            updateItem({args: {
              id: item.id,
              item: {project: item.project,
              people: item.people,
              equipment: item.equipment,
              notes: item.equipment}
            }}).then((data) => {

            })
          }}
          onCloneItem={(item, dates, newDates) => {
          }}
          user={{}}
          users={users}
          projects={projects || []}
          people={people}
          equipment={equipment}
          isLoading={false}/>
      </Box>
    );

}
