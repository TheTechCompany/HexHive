import React, {
  Component, useState
} from 'react';
import { Box } from 'grommet'
import { ScheduleView } from '@hexhive/ui';
import './index.css';
import { mutation, useRefetch, useMutation, useQuery, resolved } from '../../gqless';
import moment from 'moment';
import { schedule as scheduleActions } from '../../actions'
import { useContext } from 'react';
import { AuthContext } from '@hexhive/auth-ui';
import { useEffect } from 'react';

export const Schedule : React.FC<any> = (props) =>  {

  const { token, activeUser } = useContext(AuthContext)

  const [ horizon, setHorizon ] = useState<{start: Date, end: Date}>({
    start: new Date( moment(new Date()).startOf('isoWeek').valueOf() ),
    end: new Date( moment(new Date()).add('1', 'week').valueOf() )
  })

  const refetch = useRefetch();

  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: false,
  
  })

  const [schedule, setSchedule] = useState<any[]>([])//?.map((x) => ({...x, project: x?.project})) || [];
//query.ScheduleMany({startDate: horizon.start, endDate: horizon.end})

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
    refetchQueries: [query.ScheduleMany({startDate: horizon.start, endDate: horizon.end})],
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

  const [removeItem, infoRemove] = useMutation((mutation, args: {id: string}) => {
    const result = mutation.removeScheduleItem({id: args.id})
    return {
      item: result,
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.ScheduleMany({startDate: horizon.start, endDate: horizon.end})],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [joinCard, joinInfo] = useMutation((mutation, args: {id: string}) => {
    const result = mutation.joinScheduleItem({id: args.id})
    return {
      item: result,
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.ScheduleMany({startDate: horizon.start, endDate: horizon.end})],
    awaitRefetchQueries: true,
    suspense: false,  
  })


  const [leaveCard, leaveInfo] = useMutation((mutation, args: {id: string}) => {
    const result = mutation.leaveScheduleItem({id: args.id})
    return {
      item: result,
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.ScheduleMany({startDate: horizon.start, endDate: horizon.end})],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [cloneItem, cloenInfo] = useMutation((mutation, args: {id: string, dates: Date[]}) => {
    const result = mutation.cloneScheduleItem({id: args.id, cloneTo: args.dates})
    return {
      item: result,
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.ScheduleMany({startDate: horizon.start, endDate: horizon.end})],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  useEffect(() => {
    scheduleActions.getScheduleItems({start: horizon.start, end: horizon.end}, token || '').then((schedule) => {
      setSchedule(schedule)
      console.log("Schedule", schedule);
    });
  }, [])

  console.log("Schedule view", schedule);

    return (
      <Box flex className="schedule-container">
        <ScheduleView 
          isLoading={query.$state.isLoading}
          onJoinCard={(card: any) => {
            joinCard({args: {id: card.id}}).then((resp) => {
              console.log("JOin", card, resp);
            })

          }}
          onLeaveCard={(card: any) => {
            leaveCard({args: {id: card.id}}).then((resp) => {
              console.log("JOin", card, resp);
            })
          }}
          date={horizon.start}
          onHorizonChanged={async (start, end) => {
            console.log("Horizon", start, end)
            setHorizon({start, end})

            scheduleActions.getScheduleItems({start, end}, token || '').then((schedule) => {
              setSchedule(schedule)
              console.log("Schedule", schedule);
            });

//            const info = await refetch(query.ScheduleMany({startDate: start, endDate: end}))
            
            //   console.log("REFETCH", info)
          
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
              //const info = await refetch(query.ScheduleMany({startDate: horizon.start, endDate: horizon.end}))

              //await refetch(() => query.ScheduleMany)
             
              scheduleActions.getScheduleItems({start: horizon.start, end: horizon.end}, token || '').then((schedule) => {
                setSchedule(schedule)
                console.log("Schedule", schedule);
              });
            })
          }}

          onSaveItem={(item, ts) => {
            updateItem({args: {
              id: item.id,
              item: {
                project: item.project,
                people: item.people,
                equipment: item.equipment,
                notes: item.notes
             }
            }}).then((data) => {
              scheduleActions.getScheduleItems({start: horizon.start, end: horizon.end}, token || '').then((schedule) => {
                setSchedule(schedule)
                console.log("Schedule", schedule);
           
              })
            })
          }}
          onCloneItem={(item, dates, newDates) => {
            cloneItem({args: {id: item.id, dates: newDates}}).then((resp) => {
              console.log("Clone resp", resp, newDates)
            })
          }}
          onDeleteItem={(item) => { 
            removeItem({args: {id: item.id}}).then((resp) => {
              console.log("Delete result")
            })
          }}
          user={activeUser}
          users={users}
          projects={projects || []}
          people={people}
          equipment={equipment}/>
      </Box>
    );

}
