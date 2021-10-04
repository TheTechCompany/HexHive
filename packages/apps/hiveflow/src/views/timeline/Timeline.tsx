import React, { useEffect, useState } from 'react';
import { ColorDot, ERPModal, Timeline } from '@hexhive/ui'
//import utils from '../../utils';
import moment from 'moment';
import { stringToColor } from '@hexhive/utils';
import { Box, Button, Select, Spinner, Text } from 'grommet';
import { Add } from 'grommet-icons';
import {TimelineItem, TimelineItemCreateInput, TimelineItemItems, TimelineItemUpdateInput, useMutation, useQuery } from '@hexhive/client';
import { TimelineHeader, TimelineView } from './Header';
import _, { filter, toUpper } from 'lodash';
import { BaseStyle } from '@hexhive/styles';
import { useQuery as useApollo, gql } from '@apollo/client';

interface TimelineProps {

}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const HourTypes: any = {
    Welder: stringToColor('Welder'), // "#7fc721",
    TA: "#a3439b",
    Fabricator: "#43a3a3",
    "Skilled Labourer": "#734ab5",
    "Civil Subcontractor": "#c9900a"
}

const StatusTypes : any = {
    Won: 'green',
    Lost: 'red',
    "Customer has quote": '#8fb7cf',
    "Open": '#EEBC1D' 
}

const BaseTimeline: React.FC<TimelineProps> = (props) => {

    const [selected, setSelected] = useState<any | undefined>()
    const [erpModal, openERP] = useState<boolean>(false);

    const [view, setView] = useState<TimelineView>("Projects");

    const [date, setDate] = useState<Date>(new Date())
    const [horizon, setHorizon] = useState<{ start: Date, end: Date } | undefined>()

    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: true
    })


    const { data } = useApollo(gql`
        query Q{
            timelineItems(where: {timeline: "${view}"}){
                id
                startDate
                endDate
                
                project {
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
        }
    `, {
        variables: {
            startDate: horizon?.start?.toISOString(),
            endDate: horizon?.end?.toISOString(),
        }
    })

    const capacity = data?.timelineItems || []

    console.log(data)

    const [createTimelineItem, createInfo] = useMutation((mutation, args: { item: TimelineItemCreateInput }) => {
        const item = mutation.createTimelineItems({ input: [{...args.item}] })
        return {
            item: {
                ...item
            },
            error: null
        }
    }, {
        onCompleted(data) { },
        onError(error) { },
        refetchQueries: [query.timelineItems({ where: {timeline: view} })],
        awaitRefetchQueries: true,
        suspense: false,
    })

    const [deleteTimelineItem, deleteInfo] = useMutation((mutation, args: { id: string }) => {
        if(!args.id) return {err: "No ID Supplied"}
        const result = mutation.deleteTimelineItems({ where: { id: args.id }})
        return {
            item: result,
            error: null
        }
    }, {
        onCompleted(data) { },
        onError(error) { },
        refetchQueries: [query.timelineItems({ where: {timeline: view} })],
        awaitRefetchQueries: true,
        suspense: false,
    })

    const [updateTimelineItem, updateInfo] = useMutation((mutation, args: { id: string, item: { project?: string, notes?: string, items?: any[], startDate?: string, endDate?: string} }) => {
        let items = args.item.items?.map((x) => ({
            id: x?.id,
            type: x?.type,
            location: x?.location,
            estimate: x?.estimate
        }))
        let _item = {
            items
        }
        // const item = mutation.updateTimelineItems({ where: { id: args.id }, update: {
        //     items: [{where: {node: {id: _item.id}}, update: {node: {..._item}}}]
        // }})

        return {
            item: null,
            error: null
        }
    }, {
        onCompleted(data) { },
        onError(error) { },
        refetchQueries: [query.timelineItems({ where: {timeline: view} })],
        awaitRefetchQueries: true,
        suspense: false,
    })

    const quotes = query.estimates({
        where: {date_GTE: horizon?.start?.toISOString(), date_LTE: horizon?.end?.toISOString()}
    })?.map((quote) => ({
        start: new Date(moment(quote?.date).startOf('isoWeek').valueOf()),
        end: new Date(moment(quote?.date).endOf('isoWeek').valueOf()),
        ...quote,
        showLabel: formatter.format((quote as any).price),
        color: stringToColor(quote?.name || '')
    }))

    const projects = query.projects({ where: {status_IN: ["Job Open", "Handover"] }})?.map((x) => ({ ...x }))
    const estimates = query.estimates({ where: {status: "Customer has quote" }})?.map((x) => ({ ...x }))

    // const capacity = query.timelineItems({ where: {timeline: view}});

    const people = query.timelineItems({ where: {timeline: "People"} })

    const [timeline, setTimeline] = useState<any[]>([])

    const getWonLost = (total: number, item: any, default_color: string) => {
        let gradient = [];

        for(var k in item){
            gradient.push({color: StatusTypes[k], percent: item[k] / total})
        }
        
        // console.log(item, lostPercent, wonPercent, 1 - (lostPercent + wonPercent))

        //  gradient.push({color: 'red', percent: lostPercent})
        // gradient.push({color: 'green', percent: wonPercent})
        // gradient.push({color: default_color, percent: 1 - (lostPercent + wonPercent)})

        // for()

        return generateStripes(gradient, false)
    }

    const getColorBars = (plan: { hatched?: boolean, items?: any[] }) => {
        let total = plan.items?.reduce((previous: any, current: any) => previous += current.estimate, 0)

        let sum = plan.items?.reduce((previous, current) => {

            if (!previous[current.type]) previous[current.type] = 0
            previous[current.type] += current.estimate
            return previous
        }, {})

        let gradient = Object.keys(sum).map((key) => {
            return {
                color: HourTypes[key],
                percent: sum[key] / total
            }
        })

        return generateStripes(gradient, plan.hatched);
    }


    const generateStripes = (colors: { color: string, percent: number }[], hatched?: boolean) => {
        let c = colors.sort((a, b) => b.percent - a.percent)

        if (c.length <= 0) return 'gray' //stringToColor(`${props.item?.name}`)

        let gradient: any[] = [];
        let current_stop = 0;

        c.forEach((x, ix) => {
            let start_pos = current_stop * 100
            let end_pos = start_pos + (x.percent * 100)
            gradient.push(`${x.color} ${start_pos}%`) //First stop

            if (hatched) {
                let diff = (end_pos - start_pos) / 10

                for (var i = 0; i < diff; i++) {
                    let hatch_start = start_pos + (i * 10);
                    let hatch_end = hatch_start + 10;

                    // gradient.push(`${i % 2 ? 'gray' : x.color} ${hatch_start}%`)
                    // gradient.push(`${i % 2 ? 'gray' : x.color} ${hatch_end}%`)
                }

            }

            gradient.push(`${x.color} ${end_pos}%`) //End stop
            current_stop += x.percent;
        })

        let hatched_output = `
            repeating-linear-gradient(45deg, #ffffff42, #ffffff42 10px, transparent 10px, transparent 20px)
        `
        let output = `linear-gradient(${hatched ? '45deg' : '90deg'}, ${gradient.join(', ')})`

        if (hatched) {
            return `${hatched_output}, ${output}`
        } else {
            return output;
        }
        console.log(output)
    }

    //stringToColor(`${capacity_plan?.project?.id} - ${capacity_plan?.project?.name}` || ''),

    useEffect(() => {
        if (capacity && view == "Projects") {
            setTimeline(capacity.map((capacity_plan, ix) => {
                let project = capacity_plan?.project
                console.log(project)

                return {
                id: capacity_plan?.id || `capacity-${ix}`,
                name: `${project?.id} - ${project?.name}`.substring(0, 20) || '',
                notes: capacity_plan.notes,
                start: new Date(capacity_plan?.startDate),
                end: new Date(capacity_plan?.endDate),
                color: getColorBars({ hatched: project.__type == "Estimate", items: capacity_plan?.items || [] }),
                hoverInfo: (
                    <Box round="xsmall" overflow="hidden"  direction="column">
                        <Box pad="xsmall" background="accent-2" margin={{bottom: 'xsmall'}} direction="row" justify="between">
                            {/* <Text weight="bold">{capacity_plan?.project?.name?.substring(0, 15)}</Text> */}
                            <Text weight="bold">Total Hours: </Text>
                            <Text>{
                                capacity_plan?.items?.reduce((previous: any, current: any) => {
                                    return previous += (current?.estimate || 0)
                                }, 0)}hrs
                            </Text>
                        </Box>
                        <Box pad="xsmall">
                            {capacity_plan?.items?.slice().sort((a, b) => (a?.location || '') > (b?.location || '') ? -1 : 1).map((x) => (
                                <Box align="center" direction="row" justify="between">
                                        <Box direction="row" align="center">
                                            <ColorDot color={HourTypes[x?.type || '']} size={10}/>
                                            <Text>{x?.type}{x?.location ? ` - ${x?.location}` : ''} :</Text>
                                        </Box>
                                    <Text margin={{left: 'small'}}>{x?.estimate}hrs</Text>
                                </Box>
                            ))}
                        </Box>
                        <Text size="small">
                            {capacity_plan?.notes}
                        </Text>
                    </Box>
                ),
                showLabel: `${capacity_plan?.items?.reduce((previous: any, current: any) => {
                    return previous += (current?.estimate || 0)
                }, 0)}hrs`,
                collapsibleContent: (
                    <Text>More</Text>
                )
            }}))
        } else if (capacity && view == "People") {
            setTimeline(capacity.map((capacity_plan, ix) => {
                let project = capacity_plan?.project

                let weeks = moment(capacity_plan?.endDate).diff(moment(capacity_plan?.startDate), 'weeks')
                return {
                    id: capacity_plan?.id || `capacity-${ix}`,
                    name: `${moment(capacity_plan?.startDate).format("DD/MM/YY")} - ${moment(capacity_plan?.endDate).format("DD/MM/YY")}`.substring(0, 20) || '',
                    start: new Date(capacity_plan?.startDate),
                    end: new Date(capacity_plan?.endDate),
                    notes: capacity_plan.notes,
                    hoverInfo: (
                        <Box round="xsmall" overflow="hidden"  direction="column">
                            <Box pad="xsmall" background="accent-2" margin={{bottom: 'xsmall'}} direction="row" justify="between">
                                {/* <Text weight="bold">{capacity_plan?.project?.name?.substring(0, 15)}</Text> */}
                                <Text weight="bold">Total People: </Text>
                                <Text>{
                                    capacity_plan?.items?.reduce((previous: any, current: any) => {
                                        return previous += (current?.estimate || 0)
                                    }, 0)}
                                </Text>
                            </Box>

                            <Box pad="xsmall">
                                {capacity_plan?.items?.slice().sort((a, b) => (a?.location || '') > (b?.location || '') ? -1 : 1).map((x) => (
                                    <Box align="center" direction="row" justify="between">
                                        <Box direction="row" align="center">
                                        <ColorDot color={HourTypes[x?.type || '']} size={10}/>
                                        <Text>{x?.type}{x?.location ? ` - ${x?.location}` : ''} :</Text>
                                        </Box>
                                        <Text margin={{left: 'small'}}>{x?.estimate}</Text>
                                    </Box>
                                ))}
                            </Box>
                            <Box pad="xsmall" margin={{bottom: 'xsmall'}} direction="row" justify="between">
                                {/* <Text weight="bold">{capacity_plan?.project?.name?.substring(0, 15)}</Text> */}
                                <Text weight="bold">Total Hours: </Text>
                                <Text>{
                                    capacity_plan?.items?.reduce((previous: any, current: any) => {
                                        return previous += (current?.estimate || 0)
                                    }, 0) * 45}hrs
                                </Text>
                            </Box>
                        </Box>
                    ),
                    color: getColorBars({ hatched: project?.__type == "Estimate", items: capacity_plan?.items || [] }),
                    showLabel: `${(capacity_plan?.items?.reduce((previous: any, current: any) => {
                        return previous += (current?.estimate || 0)
                    }, 0) * 45)}hrs/week`,
                    collapsibleContent: (
                        <Text>More</Text>
                    )
                }
            }))
        }
    }, [JSON.stringify(capacity), view])

    useEffect(() => {
        if (quotes && view == 'Estimates') {
            let _weeks: any = {};
            const weeks = quotes?.reduce((previous, current) => {
                let start = current.start.getTime();
                console.log(current)
                if (!previous[start]) previous[start] = {
                    value: 0
                };
                previous[start].value += current.price

                if(!previous[start][current.status]) previous[start][current.status] = 0;
                previous[start][current.status] += current.price
                
                return previous
            }, _weeks)

            console.log(weeks)
            setTimeline(Object.keys(weeks).sort((a, b) => a == b ? 0 : a > b ? -1 : 1).map((start, ix) => {
                let value = weeks[start].value;
                delete weeks[start].value;
                return {
                    id: `${start}`,
                    name: `Week ${moment(new Date(parseInt(start))).format("W/yyyy")}`,
                    color: getWonLost(value, weeks[start], stringToColor(moment(new Date(parseInt(start))).format("DD/mm/yyyy"))),
                    start: new Date(parseInt(start)),
                    end: new Date(moment(new Date(parseInt(start))).add(7, 'days').valueOf()),
                    showLabel: formatter.format(value),
                    hoverInfo: (
                        <Box round="xsmall" overflow="hidden"  direction="column">
                            <Box pad="xsmall" background="accent-2" margin={{bottom: 'xsmall'}} direction="row" justify="between">
                                {/* <Text weight="bold">{capacity_plan?.project?.name?.substring(0, 15)}</Text> */}
                                <Text>
                                    {formatter.format(value)}
                                </Text>
                            </Box>
                            <Box pad="xsmall">
                                {Object.keys(weeks[start]).map((x) => {
                                    let item = weeks[start][x]
                                    return (
                                    <Box align="center" direction="row" justify="between">
                                            <Box direction="row" align="center">
                                                <ColorDot color={StatusTypes[x || '']} size={10}/>
                                                <Text>{x}</Text>
                                            </Box>
                                        <Text margin={{left: 'small'}}>{formatter.format(item)}</Text>
                                    </Box>
                                    )
                                }
                                )}
                            </Box>
                     
                        </Box>
                    ),
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


    const onHorizonChange = (start: Date, end: Date) => {
        //TODO BUFFER DAY Var

        console.log("Horizon", start, end)
        setHorizon({ start, end })
    };

    const filterData = (item: { start?: Date, end?: Date }) => {
        if (horizon && horizon.start && horizon.end) {
            let horizonStart = horizon.start.getTime();
            let horizonEnd = horizon.end.getTime();


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

    const createTimelinePlan = (plan: { id?: string, project?: { id?: string, type?: string }, notes?: string, items?: any[], startDate?: Date, endDate?: Date }) => {
        if (plan.id) {
            console.log("Update", plan)

            updateTimelineItem({
                args: {
                    id: plan.id,
                    item: {
                        project: plan.project.id,
                        startDate: plan.startDate.toUTCString(),
                        endDate: plan.endDate.toUTCString(),
                        notes: plan.notes,
                        items: plan.items || []
                    }
                }
            }).then(() => {
                openERP(false)
            })
        } else {
            console.log(plan)
            createTimelineItem({
                args: {
                    item: {
                        timeline: view,
                        project: {Project: {connect: {where: {node: {id: plan.project.id}}}}},
                        startDate: plan.startDate.toUTCString(),
                        endDate: plan.endDate.toUTCString(),
                        notes: plan.notes,
                        // items: {create: plan.items.map((x) => ({node: x})) } || []
                    }
                }
            }).then((data) => {
                openERP(false);
                console.log("Create timeline view", data)
            })
        }
    }

    const updateTimelinePlan = _.debounce(async (id: string, item: { notes?: string, start: Date, end: Date }) => {
        let ix = timeline.map((x) => x.id).indexOf(id);
        let times = timeline.slice();

        const old = Object.assign({}, timeline[ix]) //.find((a) => a.id == id)


        times[ix].startDate = item.start;
        times[ix].endDate = item.end;
        console.log(times[ix])

        setTimeline(times)

        console.log(timeline)
        try {
            const result = await updateTimelineItem({
                args: {
                    id: id?.toString() || '',
                    item: {
                        startDate: item.start.toUTCString(),
                        endDate: item.end.toUTCString(),
                        notes: item.notes
                    }
                }
            })
        } catch (e) {
            times[ix] = old;
            setTimeline(times)
        }
        return true;

    }, 500)

    return (
        <Box
            flex
            gap="xsmall" direction="column">
            <ERPModal
                type={view}
                selected={selected}
                onClose={() => {
                    openERP(false)
                    setSelected(undefined)
                }}
                onDelete={() => {
                    openERP(false);
                    if (!selected) return;
                    deleteTimelineItem({ args: { id: selected } })
                    setSelected(undefined)
                }}
                onSubmit={createTimelinePlan}
                projects={projects?.map((x) => ({ id: x.id, name: x.name, type: "Project" })).concat(estimates?.map((x) => ({ id: x.id, name: x.name, type: "Estimate" })) || []) || []}
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
                    dayStatus={(day) => {
                        let horizonStart = day.clone().startOf('isoWeek').valueOf()
                        let horizonEnd = day.clone().endOf('isoWeek').valueOf()

                        let people_power = people?.filter((a) => {
                            return (horizonEnd > (new Date(a?.startDate).getTime() || 0) && horizonStart < (new Date(a?.endDate).getTime() || 0))
                        })

                        let job_power = capacity?.filter((a) => {
                            return (horizonEnd > (new Date(a?.startDate).getTime() || 0) && horizonStart < (new Date(a?.endDate).getTime() || 0))
                        })

                        let week_power = people_power?.reduce((previous, current) => {
                            let weeks = moment(current?.endDate).diff(moment(current?.startDate), 'weeks')
                            let week = current?.items?.({})?.reduce((prev, cur) => {
                                return prev + (cur?.estimate || 0)
                            }, 0)

                            return previous + ((week || 0) * 45) //((week || 0) / weeks)
                        }, 0)

                        let job_week = job_power?.reduce((previous, current) => {
                            let weeks = moment(current?.endDate).diff(moment(current?.startDate), 'weeks') || 1

                            let week = _.reduce(current?.items, (prev, curr) => prev + (curr?.estimate || 0), 0)

                            // let week = (current?.items && current?.items.length > 0) ? (current?.items || []).reduce((prev, cur) => {
                            //     return prev + (cur?.estimate && !isNaN(cur?.estimate) ? cur?.estimate : 0)
                            // }, 0) : 0;

                            // if(week != undefined && week > 0) week = week / weeks;

                            return previous + ((week || 0) / weeks) //((week || 0) / weeks)
                        }, 0)

                        let alarm_level = (job_week || 0) > (week_power || 0) ? ((job_week || 0) / (week_power || 0)) : 0;
                        let alarm_color = alarm_level < 2 ? `rgba(231, 93, 61, ${alarm_level - 1})` : 'rgb(231, 93, 61)'
                        return ((job_week || 0) > (week_power || 0) && (day.isoWeekday() != 6 && day.isoWeekday() != 7)) ? alarm_color : 'initial' // ? 'red' : 'initial';
                    }}
                    onSelectItem={(item) => {
                        console.log(item, capacity)
                        openERP(true)
                        setSelected(capacity?.find((a) => a?.id == (item as any)?.id))
                        console.log(item)
                    }}
                    loading={query.$state.isLoading}
                    onHorizonChange={onHorizonChange}
                    resizable
                    mode="month"
                    links={[]}
                    data={timeline.filter(filterData)}
                    date={date}
                    itemHeight={30}
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