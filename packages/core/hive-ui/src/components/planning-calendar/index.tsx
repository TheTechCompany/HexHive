import React, { Component } from 'react';

import FilterMenu from './filter-menu';
import { Box, Button } from 'grommet'

import { PlanningModal } from '../modals/planning-modal'

import { 
  Menu,
  Add
} from 'grommet-icons'

import {DateSelector} from '../date-selector';

import {Calendar as BigCalendar, momentLocalizer, SlotInfo} from 'react-big-calendar';

// import './index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';

const localizer = momentLocalizer(moment)

export interface PlanningCalendarProps {

}

export const PlanningCalendar : React.FC<PlanningCalendarProps> = (props) => {
  
  const [ time, setTime ] = useState<Date>(new Date())

  const [ events, setEvents ] = useState<any[]>([])

  const [ filters, setFilters ] = useState<{jobs: boolean, quotes: Boolean, designs: boolean}>({
    jobs: true,
    quotes: true,
    designs: true
  })

  const [ selectedEvent, setSelected ] = useState<any>()
  const [ showModal, openModal ] = useState<boolean>(false)
  const [ showMenu, setShowMenu ] = useState<boolean>(false)

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     time: moment(),
  //     events: [],
  //     filters: {
  //       jobs: true,
  //       quotes: true,
  //       designs: true
  //     },
  //     selectedEvent: null,
  //     showModal: false,
  //     showMenu: false
  //   };
  // }

  useEffect(() => {
    getQuoteSchedule(time)
  }, [])

  const getBackground = (type: string) => {
    switch(type){
      case 'jobs':
        return '#3f51b5';
      case 'quotes':
        return '#b5b13f';
      case 'designs':
        return '#b53f49';
      default:
        return 'black'
    }
  }

 const getQuoteSchedule = (date: Date) => {
    let m = moment(date)
    var s = m.startOf('month').valueOf();
    var e = m.endOf('month').valueOf();

    // utils.planner.getPlanned(s, e).then((r) => {
    //   console.log(r);
    //   //Tagging
    //   r.quotes = r.quotes.map((x) => ({
    //     ...x,
    //     type: (x.type) ? x.type : 'quotes',
    //   }))
    //   r.jobs = r.jobs.map((x) => ({
    //     ...x,
    //     type: 'jobs'
    //   }))
    //   let events = r.jobs.concat(r.quotes)
    //   events = events.map((x) => {
    //     return {
    //       id: x.id,
    //       type: x.type,
    //       title: x.displayId + " " + x.displayName,
    //       start: new Date(x.start),
    //       end: new Date(x.end),
    //       data: x.quote,
    //       style: {backgroundColor: getBackground(x.type)},
    //       allDay: true
    //     }
    //   });
    //   setEvents(events)

    // });

  }

  const fetchScheduleMonth = (m: Date) => {
    // utils.planner.getSchedule(m).then((r) => {
    //   var evts = [];

    //   for(var i = 0; i < r.length; i++){
    //     var ranges = [];
    //     var diff = 0;
    //     var range = {
    //       start: r[i].schedule[0],    
    //       end: 0
    //     }
    //     var last = 0;
    //     for(var o = 0; o < r[i].schedule.length; o++){
    //       diff = (r[i].schedule[o] - ((last > 0) ? last : range.start)) / 1000 / 60 / 60 / 24;

    //       if(diff <= 1){
    //         range.end = r[i].schedule[o] + (12 * 60 * 60 * 1000);
    //       }
    //       last = r[i].schedule[o];
    //       if(diff > 1){
    //         ranges.push(Object.assign({}, range));
    //         range.start = r[i].schedule[o];
    //         range.end = r[i].schedule[o];
    //         last = 0;
    //       }
    //     }
    //     ranges.push(range);
    //     for(var o = 0; o < ranges.length; o++){
    //       evts.push({
    //         id: evts.length,
    //         title: r[i].name,
    //         start: new Date(ranges[o].start),
    //         end: new Date(ranges[o].end),   
    //         allDay: true
    //       });
    //     }
    //   }
    //   setEvents(evts)
    // });      
  }

  const _changeMonth = (time: Date) => {
    //      this.fetchScheduleMonth(m);
    getQuoteSchedule(time);
    setTime(time)
  }


  const _refresh = () => {
    //        this.fetchScheduleMonth(m);
    getQuoteSchedule(time);
  }


  const onNavigate = (date: Date) => {
    //        this.fetchScheduleMonth(moment(date));
    setTime(date)
  }


  const _toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const filterEvents = (evts: any[]) => {

    let _filters = Object.keys(filters).map((key) => (filters as any)[key])

    return evts.filter((a) => _filters.indexOf(a.type) > -1);
  }

  const selectSpace = (event: SlotInfo) => {
    setSelected({start: event.start, end: event.end})
    openModal(true)
  }

    return (
      <Box className="month-container"> 
        <PlanningModal 
          open={showModal} 
          event={selectedEvent}
          onClose={() => {openModal(false); setSelected(null)}}/>
        <div style={{ 
          background: "#f5f5f5",
          opacity: showMenu ? 1 : 0, 
          width: showMenu ? 180 :0, 
          transition: 'width 250ms, opacity 200ms', 
          height: '100%'}}>
          <FilterMenu onFilterChange={(filters: any) => setFilters(filters)} filters={filters}/>
        </div>
        <div className="month-container__inner">
          <div className="month-header">
            <div className="month-header__main">
              <Button 
                icon={<Menu />}
                className="month-header__menu"
                onClick={_toggleMenu}>
              </Button>
              <DateSelector
                onChange={_changeMonth}
                value={time}
                displayFormat={"MMMM YYYY"} />

              <Button
                icon={<Add />} 
                className="month-header__action"
                onClick={() => openModal(true)}>
              </Button>
            </div>
          </div>
          <div className="month-scheduler">
            <BigCalendar
              localizer={localizer}
              selectable
              onSelectSlot={selectSpace}
              view="month" 
              toolbar={false}
              style={{flex: 1}}
              popup={true}
              date={time}
              onNavigate={onNavigate}
              onSelectEvent={(evt, e) => {
                if(evt.type == "quotes" || evt.type == "designs"){
                  setSelected(evt)
                  openModal(true)
                }
                console.log("SELECT", evt, e)
              }
              }
              events={filterEvents(events)}

            />
      
          </div> 
        </div>
      </Box>
    );
  
} 
