import React, {
  Component, useState
} from 'react';
import { Box, Button, Collapsible } from 'grommet'
import { ScheduleView } from '@hexhive/ui';
import { mutation, useRefetch, useMutation, useQuery, resolved } from '@hexhive/client';
import moment from 'moment';
import { schedule as scheduleActions } from '../../actions'
import { useContext } from 'react';
import { AuthContext, useAuth } from '@hexhive/auth-ui';
import { useEffect } from 'react';
import { Menu, Previous, Next } from 'grommet-icons';
import {DraftPane } from './draft-pane';
import { useQuery as useApollo, gql, useApolloClient } from '@apollo/client';
export const Schedule : React.FC<any> = (props) =>  {

  const { activeUser } = useAuth()

  const client = useApolloClient();

  const [ horizon, setHorizon ] = useState<{start: Date, end: Date}>({
    start: new Date( moment(new Date()).startOf('isoWeek').valueOf() ),
    end: new Date( moment(new Date()).endOf('isoWeek').valueOf() )
  })

  const refetch = useRefetch();

  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: false,
  
  })


  const draftSchedule = query.timelineItems({ where: {timeline: "Projects", startDate: horizon.start?.toISOString(), endDate: horizon.end?.toISOString()} })?.map((x) => ({...x})) || [];

  // const [schedule, setSchedule] = useState<any[]>([])//?.map((x) => ({...x, project: x?.project})) || [];
//query.ScheduleMany({startDate: horizon.start, endDate: horizon.end})

const { data: slowData } = useApollo(gql`
query Slow {
  hiveUsers {
    id
    name
  }
  people {
    id
    name
  }
  projects{
    id
    name
  }
  equipment {
    id
    name
  }
}
`)
  const {data } = useApollo(gql`
   query Q {
    scheduleItems {
      id
      date
      people{
        id
        name
      }
      equipment{
        id
        name
      }
      project {
        id
        name
      }
      notes
      owner {
        id
        name
      }
      managers {
        id
        name
      }
    }
   
  }
  `)

  const refetchSchedule = () => {
    client.refetchQueries({
      include: ['Q']
    })
  }
  console.log(data)

  const schedule = data?.scheduleItems || []//query.scheduleItems({where: {date_GT: horizon.start?.toISOString(), date_LT: horizon.end?.toISOString()}})

  const projects = slowData?.projects || []// query.projects({})?.map((x) => ({...x})) || [];
  const people = slowData?.people || []// query.people({})?.map((x) => ({...x})) || [];
  const equipment = slowData?.equipment || [] //query.equipment({})?.map((x) => ({...x})) || []

  const users = slowData?.hiveUsers || [] //query.hiveUsers({})?.map((x) => ({...x})) || []

  const [createItem, info] = useMutation((mutation, args: {item: any}) => {
    const result = mutation.updateHiveOrganisations({ 
      update: {
        schedule: [{create: {node: args.item}}]
      }
    })
    return {
      item: {
        ...result
      },
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.scheduleItems({where: {date_GT: horizon.start?.toISOString(), date_LT: horizon.end?.toISOString()}})],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [updateItem, infoItem] = useMutation((mutation, args: {id: string, item: any}) => {
    const result = mutation.updateScheduleItems({where: {id: args.id}, update: {...args.item}})
    return {
      item: {
        ...result
      },
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.scheduleItems({where: {date_GT: horizon.start?.toISOString(), date_LT: horizon.end?.toISOString()}})],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [removeItem, infoRemove] = useMutation((mutation, args: {id: string}) => {
    const result = mutation.deleteScheduleItems({where: {id: args.id}})
    return {
      item: result,
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.scheduleItems({where: {date_GT: horizon.start?.toISOString(), date_LT: horizon.end?.toISOString()}})],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [joinCard, joinInfo] = useMutation((mutation, args: {id: string}) => {
    const result = mutation.updateScheduleItems({where: {id: args.id}, connect: {
        managers: [{where: {id: activeUser?.id}}]
    }})
    return {
      item: result,
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.scheduleItems({where: {date_GT: horizon.start?.toISOString(), date_LT: horizon.end?.toISOString()}})],
    awaitRefetchQueries: true,
    suspense: false,  
  })


  const [leaveCard, leaveInfo] = useMutation((mutation, args: {id: string}) => {
    const result = mutation.updateScheduleItems({where: {id: args.id}, disconnect: {
      managers: [{where: {id: activeUser?.id}}]
    }})
    return {
      item: result,
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.scheduleItems({where: {date_GT: horizon.start?.toISOString(), date_LT: horizon.end?.toISOString()}})],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [cloneItem, cloenInfo] = useMutation((mutation, args: {id: string, dates: Date[]}) => {
    // const result = mutation.cloneScheduleItem({id: args.id, cloneTo: args.dates})
    return {
      item:  false, //result ||
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.scheduleItems({where:{date_GT: horizon.start?.toISOString(), date_LT: horizon.end?.toISOString()}})],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  useEffect(() => {
      // scheduleActions.getScheduleItems({start: horizon.start, end: horizon.end}, '').then((schedule) => {
      //   setSchedule(schedule)
      //   console.log("Schedule", schedule);
      // });
    
  }, [])
  
  const [ draftsOpen, openDrafts ] = useState<boolean>(false);

  console.log("Schedule view", schedule);

    return (
      <Box
        direction="row"
         flex className="schedule-container">
   
          <DraftPane  
            open={draftsOpen}
            drafts={draftSchedule}
            projects={projects} />
        <ScheduleView 
          actions={{
            left: (<Button 
              onClick={() => openDrafts(!draftsOpen)} 
               hoverIndicator icon={draftsOpen ? <Previous /> : <Next />} />)
          }}
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
            
            refetchSchedule()
            // scheduleActions.getScheduleItems({start, end}, '').then((schedule) => {
            //   setSchedule(schedule)
            //   console.log("Schedule", schedule);
            // });


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
             
              // scheduleActions.getScheduleItems({start: horizon.start, end: horizon.end}, '').then((schedule) => {
              //   // setSchedule(schedule)
              //   console.log("Schedule", schedule);
              // });
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
              // scheduleActions.getScheduleItems({start: horizon.start, end: horizon.end}, '').then((schedule) => {
              //   // setSchedule(schedule)
              //   console.log("Schedule", schedule);
           
              // })
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
