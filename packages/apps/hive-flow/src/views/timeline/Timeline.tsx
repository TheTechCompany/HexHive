import React, { useEffect, useState } from 'react';
import { ERPModal, Timeline } from '@hexhive/ui'
//import utils from '../../utils';
import moment from 'moment';
import { stringToColor } from '@hexhive/utils';
import { Box, Button, Select, Spinner, Text } from 'grommet';
import { Add } from 'grommet-icons';
import { TimelineItem, TimelineItemInput, useMutation, useQuery } from '../../gqless';
import { TimelineHeader, TimelineView } from './Header';
import _, { filter, toUpper } from 'lodash';

interface TimelineProps {

}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const BaseTimeline: React.FC<TimelineProps> = (props) => {

    const [ selected, setSelected ] = useState<string | undefined>()
    const [erpModal, openERP] = useState<boolean>(false);

    const [view, setView] = useState<TimelineView>("Projects");

    const [date, setDate] = useState<Date>(new Date())
    const [horizon, setHorizon] = useState<{ start: Date, end: Date } | undefined>()

    const [data, setData] = useState<any[]>([
        {
            id: 3,
            color: 'purple',
            name: "Test",
            start: new Date(2021, 2, 12),
            end: new Date(2021, 5, 9)
        },
        {
            id: 2,
            color: 'orange',
            name: "Test",
            start: new Date(2021, 7, 12),
            end: new Date(2021, 12, 9)
        }
    ])


    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: true
    })

    const [createTimelineItem, createInfo] = useMutation((mutation, args: { item: TimelineItemInput }) => {
        const item = mutation.createTimelineItem({ item: args.item })
        return {
            item: {
                ...item
            },
            error: null
        }
    }, {
        onCompleted(data) { },
        onError(error) { },
        refetchQueries: [query.TimelineItemMany({ timeline: 'Projects' })],
        awaitRefetchQueries: true,
        suspense: false,
    })

    const [ deleteTimelineItem, deleteInfo ] = useMutation((mutation, args: {id: string}) => {
        const result = mutation.removeTimelineItem({id: args.id})
        return {
            item: result,
            error: null
        }
    }, {
        onCompleted(data) { },
        onError(error) { },
        refetchQueries: [query.TimelineItemMany({ timeline: 'Projects' })],
        awaitRefetchQueries: true,
        suspense: false,
    })

    const [updateTimelineItem, updateInfo] = useMutation((mutation, args: { id: string, item: TimelineItemInput }) => {
        let items = args.item.items?.map((x) => ({
            type: x?.type,
            location: x?.type,
            estimate: x?.estimate
        }))
        let _item = {
            ...args.item,
            items
        }
        const item = mutation.updateTimelineItem({ id: args.id, item: _item })

        return {
            item: {
                ...item,
            },
            error: null
        }
    }, {
        onCompleted(data) { },
        onError(error) { },
        refetchQueries: [query.TimelineItemMany({ timeline: 'Projects' })],
        awaitRefetchQueries: true,
        suspense: false,
    })

    const quotes = query.QuoteMany()?.map((quote) => ({
        start: new Date(moment(quote?.date).startOf('isoWeek').valueOf()),
        end: new Date(moment(quote?.date).endOf('isoWeek').valueOf()),
        ...quote,
        showLabel: formatter.format((quote as any).price),
        color: stringToColor(quote?.name || '')
    }))

    const projects = query.ProjectMany({ statusList: ["Job Open", "Handover"] })?.map((x) => ({ ...x }))

    const capacity = query.TimelineItemMany({ timeline: 'Projects' });

    const [ timeline, setTimeline ] = useState<any[]>([])

    useEffect(() => {
        if(capacity && view == "Projects"){
            setTimeline(capacity.map((capacity_plan, ix) => ({
                id: capacity_plan?.id || `capacity-${ix}`,
                name: capacity_plan?.project?.name || '',
                start: new Date(capacity_plan?.startDate),
                end: new Date(capacity_plan?.endDate),
                color: stringToColor(`${capacity_plan?.project?.id} - ${capacity_plan?.project?.name}` || ''),
                showLabel: `${capacity_plan?.items?.reduce((previous: any, current: any) => {
                    return previous += (current?.estimate || 0)
                }, 0)}hrs`,
                collapsibleContent: (
                    <Text>More</Text>
                )
            })))
        }
    }, [JSON.stringify(capacity), view])

    useEffect(() => {
        if(quotes && view == 'Estimates'){
            let _weeks : any = {};
            const weeks = quotes?.reduce((previous, current) => {
                console.log(current)
                let start = current.start.getTime();
                if (!previous[start]) previous[start] = 0;
                previous[start] += current.price
                return previous
            }, _weeks)

            console.log(weeks)
            setTimeline(Object.keys(weeks).map((start, ix) => {
                return {
                    id: `${start}`,
                    name: `Week ${moment(new Date(parseInt(start))).format("W/yyyy")}`,
                    color: stringToColor(moment(new Date(parseInt(start))).format("DD/mm/yyyy")),
                    start: new Date(parseInt(start)),
                    end: new Date(moment(new Date(parseInt(start))).add(7, 'days').valueOf()),
                    showLabel: formatter.format(weeks[start])
                }
            }))
        }
    }, [JSON.stringify(quotes), view])

    useEffect(() => {
        // utils.quote.getAll().then((quotes) => {

        //   setData(quotes.map((x: any) => 
        //   {
        //       let start = new Date(moment(x.StartDate).startOf('isoWeek').valueOf())
        //       let end =  new Date(moment(start).add(7, 'days').valueOf())

        //       console.log(start, end)
        //   return {
        //        id: `${x?.QuoteID}`, 
        //        status: x?.Status,
        //        color: stringToColor(x?.Name), 
        //        name: x?.Name, 
        //        start: start,
        //        showLabel: formatter.format(parseInt(x?.TotalLinePrice?.toFixed(0) || 0)),
        //        end: end,
        //        price: parseInt(x?.TotalLinePrice?.toFixed(0)) || 0 
        //     }
        //   }))
        // })
    }, [])

    useEffect(() => {
        let year = moment(horizon?.start).get('year')
        let oldYear = moment(date).get('year')
        if (year != oldYear) {
           if (horizon?.start) setDate(horizon?.start)

            // utils.quote.fetchMonthQuotes(year).then((quotes) => {
            //     console.log(quotes)

            //     setData(quotes.map((x: any) => 
            //     {
            //         let start = new Date(moment(x.StartDate).startOf('isoWeek').valueOf())
            //         let end =  new Date(moment(start).add(7, 'days').valueOf())

            //         console.log(start, end)
            //     return {
            //          id: `${x?.QuoteID}`, 
            //          status: x?.Status,
            //          color: stringToColor(x?.Name), 
            //          name: x?.Name, 
            //          start: start,
            //          showLabel: formatter.format(parseInt(x?.TotalLinePrice?.toFixed(0) || 0)),
            //          end: end,
            //          price: parseInt(x?.TotalLinePrice?.toFixed(0)) || 0 
            //       }
            //     }))

            // })
        }
    }, [horizon?.start])

    const getWeeks = () => {
        let _weeks : any = {};
        const weeks = quotes?.filter(filterData).reduce((previous, current) => {
            console.log(current)
            let start = current.start.getTime();
            if (!previous[start]) previous[start] = 0;
            previous[start] += current.price
            return previous
        }, _weeks)

        console.log(weeks)
        return Object.keys(weeks).map((start, ix) => {
            return {
                id: start,
                name: `Week ${moment(new Date(parseInt(start))).format("W")}`,
                color: stringToColor(moment(new Date(parseInt(start))).format("DD/mm/yyyy")),
                start: new Date(parseInt(start)),
                end: new Date(moment(new Date(parseInt(start))).add(7, 'days').valueOf()),
                showLabel: formatter.format(weeks[start])
            }
        })
    }



    const onHorizonChange = (start: Date, end: Date) => {
        //TODO BUFFER DAY Var
        // let adjustedHorizon = {
        //     start: moment(start).subtract(30, 'days').toDate(),
        //     end: moment(end).add(30, 'days').toDate()
        // }
        console.log("Horizon", start, end)
        setHorizon({start, end})

        // let result = DATA.filter((item) => {
        //   return (item.start < start && item.end > end) || (item.start > start && item.start < end) || (item.end > start && item.end < end);
        // });
        // console.log('Calculating ');
        // this.setState({ data: result });
    };

    const filterData = (item: {start?: Date, end?: Date} ) => {
        if (horizon && horizon.start && horizon.end) {
            console.log(item)
            let horizonStart = horizon.start.getTime();
            let horizonEnd = horizon.end.getTime();

            console.log(horizon.start.getTime() < (item.end?.getTime() || 0))

            return (horizonEnd > (item.start?.getTime() || 0) && horizonStart < (item.end?.getTime() || 0))
                // return (item.start < horizon.start && item.end > horizon.end) || (item.start > horizon.start && item.start < horizon.end) || (item.end > horizon.start && item.end < horizon.end);
            
        } else {
            return true;
        }
    }

    const getData = () => {
        if (view === 'Estimates') {
            return timeline?.filter(filterData);
        } else {
            return timeline?.filter(filterData)      
        }
    }

    const createTimelinePlan = (plan: { id?: string, project?: string, items?: any[], startDate?: Date, endDate?: Date }) => {
        if(plan.id){
            updateTimelineItem({
                args: {
                    id: plan.id,
                    item: {
                        project: plan.project,
                        startDate: plan.startDate,
                        endDate: plan.endDate,
                        items: plan.items || []
                    }
                }
            }).then(() => {
                openERP(false)
            })
        }else{
        console.log(plan)
            createTimelineItem({
                args: {
                    item: {
                        timeline: view,
                        project: plan.project,
                        startDate: plan.startDate,
                        endDate: plan.endDate,
                        items: plan.items || []
                    }
                }
            }).then((data) => {
                openERP(false);
                console.log("Create timeline view", data)
            })
        }
    }

    const updateTimelinePlan = _.debounce(async (id: string, item: { start: Date, end: Date }) => {
        let ix = timeline.map((x) => x.id).indexOf(id);
        let times = timeline.slice();

        const old = Object.assign({}, timeline[ix]) //.find((a) => a.id == id)
        

        times[ix].startDate = item.start;
        times[ix].endDate = item.end;
        console.log(times[ix])

        setTimeline(times)

        console.log(timeline)
        try{
            const result = await updateTimelineItem({
                args: {
                    id: id?.toString() || '',
                    item: {
                        startDate: item.start,
                        endDate: item.end
                    }
                }
            })
        }catch(e){
            times[ix] = old;
            setTimeline(times)
        }
        return true;

    }, 500)

    const selectedItem = capacity?.find((a) => a?.id == selected)

    return (
        <Box
            flex
            gap="xsmall" direction="column">
            <ERPModal
                selected={capacity?.find((a) => a?.id == selected)}
                onClose={() => {
                    openERP(false)
                    setSelected(undefined)
                }}
                onDelete={() => {
                    openERP(false);
                    if(!selected) return;
                    deleteTimelineItem({args: {id: selected}})
                    setSelected(undefined)
                }}
                onSubmit={createTimelinePlan}
                projects={projects || []}
                open={erpModal} />
            <TimelineHeader
                onAdd={() => openERP(true)}
                view={view}
                onViewChange={(view) => setView(view)} />

            <Box
                overflow="hidden"
                flex
                round="small">

           
                <Timeline
                    onSelectItem={(item) => {
                        openERP(true)
                        setSelected((item as any).id)
                        console.log(item)
                    }}
                    loading={query.$state.isLoading}
                    onHorizonChange={onHorizonChange}
                    resizable
                    mode="month"
                    links={[]}
                    data={timeline.filter(filterData)}
                    date={date}
                    itemheight={30}
                    onUpdateTask={async (task, info) => {
                        //Task is old state, info is new {start:Date, end: Date}

                        // let ix = timeline.map((x) => x.id).indexOf(task.id?.toString());
                        // let times = timeline.slice();
                
                        // const old = Object.assign({}, timeline[ix]) //.find((a) => a.id == id)
                        
                
                        // times[ix].startDate = info.start;
                        // times[ix].endDate = info.end;
                
                        // setTimeline(times)

                        console.log(task, info)
                        if (!task.id?.toString()) return;
                        updateTimelinePlan(task.id.toString(), info)
                    }}
                />
            </Box>
        </Box>
    )
}

export default BaseTimeline;