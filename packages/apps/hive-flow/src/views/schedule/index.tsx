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
console.log("ACTIVE", activeUser)
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


  // const draftSchedule = query.timelineItems({ where: {timeline: "Projects", startDate_LTE: horizon.end?.toISOString(), endDate_GTE: horizon.start?.toISOString()} })?.map((x) => ({...x, project: x.project({}), items: x.items({})})) || [];

  // const [schedule, setSchedule] = useState<any[]>([])//?.map((x) => ({...x, project: x?.project})) || [];
//query.ScheduleMany({startDate: horizon.start, endDate: horizon.end})

const slowResult = useApollo(gql`
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
const slowData = slowResult.data;
  const {data } = useApollo(gql`
   query Q ($startDate: DateTime, $endDate: DateTime) {
     timelineItems (where: {timeline: "Projects", startDate_LTE: $endDate, endDate_GTE: $startDate}){
       id
       project{
          ... on Project { 
            id
            name
          }
          ... on Estimate {
            id
            name
          }
       }
       items {
          type
          location
          estimate
       }
     }
    scheduleItems (where: {date_GTE: $startDate, date_LTE: $endDate} ) {
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
  `, {
    variables: {
      startDate: horizon?.start?.toISOString(),
      endDate: horizon?.end?.toISOString()
    }
  })

  const refetchSchedule = () => {
    client.refetchQueries({
      include: ['Q', 'Slow']
    })
  }
  console.log(data)

  const draftSchedule = data?.timelineItems || []
  const schedule = data?.scheduleItems || []//query.scheduleItems({where: {date_GT: horizon.start?.toISOString(), date_LT: horizon.end?.toISOString()}})

  const projects = slowData?.projects || []// query.projects({})?.map((x) => ({...x})) || [];
  const people = slowData?.people || []// query.people({})?.map((x) => ({...x})) || [];
  const equipment = slowData?.equipment || [] //query.equipment({})?.map((x) => ({...x})) || []

  const users = slowData?.hiveUsers || [] //query.hiveUsers({})?.map((x) => ({...x})) || []

  const [createItem, info] = useMutation((mutation, args: {item: any}) => {
    let query = {};

    if(args.item.equipment?.length > 0){
      query = {
        ...query,
        equipment: {
          connect: [{where: {node: {id_IN: args.item?.equipment?.map((x) => x.id)}}}]
        },
      }
    }

    if(args.item.people?.length > 0){
      query = {
        ...query,
        people: {
          connect: [{where: {node: {id_IN: args.item?.people?.map((x) => x.id)}}}]
        },
      }
    }
    if(args.item.notes){
      query = {
        ...query,
        notes: args.item.notes
      }
    }
    const result = mutation.updateHiveOrganisations({ 
 
      update: {
        schedule: [{create: [{node: {
          date: args.item.date,
          project: {
            connect: {where: {node: {
              id: args.item.project
             }}}
          },
          ...query,
          owner: {
            connect: {where: {node: {id: activeUser.sub}}}
          }
        }}]}]
      }
    })
    return {
      item: {
        ...result.hiveOrganisations[0]
      },
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [updateItem, infoItem] = useMutation((mutation, args: {id: string, item: any}) => {
    
    console.log("UPDATE", args)
    let oldScheduleItem = schedule.find((a) => a.id == args.id)
    
    let add_people = args.item.people.filter((a) => oldScheduleItem.people.map((x) => x.id).indexOf(a.id) < 0)
    let remove_people = oldScheduleItem.people.filter((a) => args.item.people.map((x) => x.id).indexOf(a.id) < 0)

    let add_equipment = args.item.equipment.filter((a) => oldScheduleItem.equipment.map((x) => x.id).indexOf(a.id) < 0)
    let remove_equipment = oldScheduleItem.equipment.filter((a) => args.item.equipment.map((x) => x.id).indexOf(a.id) < 0)


    let query : any = {
      
    };

    if(args.item.project != oldScheduleItem.project.id) {
      query['project'] = {
        disconnect: {where: {node: {id: oldScheduleItem.project.id}}},
        connect: {where: {node: {id: args.item.project}}}
      }
    }
    if(args.item.notes) query.notes = args.item.notes;

    if(add_people.length > 0){
      query = {
        ...query,
        people: {
          ...query.people,
          connect: [{where: {node: {id_IN: add_people.map((x) => x.id)}}}]
        }
      }
    }


    if(remove_people.length > 0){
      query = {
        ...query,
        people: {
          ...query.people,
          disconnect: [{where: {node: {id_IN: remove_people.map((x) => x.id)}}}]
        }
      }
    }

    if(add_equipment.length > 0){
      query = {
        ...query,
        equipment: {
          ...query.equipment,
          connect: [{where: {node: {id_IN: add_equipment.map((x) => x.id)}}}]
        }
      }
    }


    if(remove_equipment.length > 0){
      query = {
        ...query,
        equipment: {
          ...query.equipment,
          disconnect: [{where: {node: {id_IN: remove_equipment.map((x) => x.id)}}}]
        }
      }
    }
    const result = mutation.updateScheduleItems({where: {id: args.id}, update: {
        ...query
    }})
    return {
      item: {
        ...result.scheduleItems[0]
      },
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [removeItem, infoRemove] = useMutation((mutation, args: {id: string}) => {
    const result = mutation.deleteScheduleItems({where: {id: args.id}})
    return {
      item: {
        ...result
      },
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [joinCard, joinInfo] = useMutation((mutation, args: {id: string}) => {
    console.log(activeUser)
    if(!activeUser?.sub) return;
 
    const result = mutation.updateScheduleItems({where: {id: args.id}, update: {
        managers: [{connect: [{where: {node: {id: activeUser?.sub}}}] }]
    }})
    return {
      item: {
        ...result.scheduleItems[0]
      },
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [],
    awaitRefetchQueries: true,
    suspense: false,  
  })


  const [leaveCard, leaveInfo] = useMutation((mutation, args: {id: string}) => {
    if(!activeUser?.sub) return;
    const result = mutation.updateScheduleItems({where: {id: args.id}, disconnect: {
      managers: [{where: {node: {id: activeUser?.sub}}}]
    }})
    return {
      item: result,
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [],
    awaitRefetchQueries: true,
    suspense: false,  
  })

  const [cloneItem, cloenInfo] = useMutation((mutation, args: {item: any, dates: Date[]}) => {
    
    let query : any = {};
    if(args.item.notes) query.notes = args.item.notes;

    if(args.item.people.length > 0){
      query = {
        ...query,
        people: {
          ...query.people,
          connect: [{where: {node: {id_IN: args.item.people.map((x) => x.id)}}}]
        }
      }
    }

    if(args.item.equipment.length > 0){
      query = {
        ...query,
        equipment: {
          ...query.equipment,
          connect: [{where: {node: {id_IN: args.item.equipment.map((x) => x.id)}}}]
        }
      }
    }


    const item = mutation.updateHiveOrganisations({
      update: {
        schedule: [{create: args.dates.map((date) => ({
          node: {
            date: date.toISOString(),
            project: {
              connect: {where: {node: {
                id: args.item.project
               }}}
            },
            ...query,
            owner: {
              connect: {where: {node: {id: activeUser.sub}}}
            }
          }
        }))}]
      }
    })
    // const result = mutation.cloneScheduleItem({id: args.id, cloneTo: args.dates})
    return {
      item:  {
        ...item.hiveOrganisations[0]
      }, //result ||
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
              refetchSchedule()
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

            // refetchSchedule()
            
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

              refetchSchedule()
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
              refetchSchedule();
              // scheduleActions.getScheduleItems({start: horizon.start, end: horizon.end}, '').then((schedule) => {
              //   // setSchedule(schedule)
              //   console.log("Schedule", schedule);
           
              // })
            })
          }}
          onCloneItem={(item, dates, newDates) => {
            cloneItem({args: {item, dates: newDates}}).then((resp) => {
              refetchSchedule()
              console.log("Clone resp", resp, newDates)
            })
          }}
          onDeleteItem={(item) => { 
            removeItem({args: {id: item.id}}).then((resp) => {
              console.log("Delete result")
              refetchSchedule()
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
