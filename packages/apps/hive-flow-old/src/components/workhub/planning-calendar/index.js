import React, { Animated, Component } from 'react';

import FilterMenu from './filter-menu';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { PlanningModal } from '../../modals/planning-modal'
import { 
  Menu,
  Add
} from 'grommet-icons'

import MonthPicker from '../../primatives/month-picker';

import utils from '../../../utils';
import {Calendar as BigCalendar, momentLocalizer} from 'react-big-calendar';

import './index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

var moment = require('moment');

const localizer = momentLocalizer(moment)

export default class MonthView extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: moment(),
      events: [],
      filters: {
        jobs: true,
        quotes: true,
        designs: true
      },
      selectedEvent: null,
      showModal: false,
      showMenu: false
    };
  }

  componentDidMount(){
    //    this.fetchScheduleMonth(this.state.time);
    this.getQuoteSchedule(this.state.time);
  } 

  getBackground(type){
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

  getQuoteSchedule(m){
    var s = m.startOf('month').valueOf();
    var e = m.endOf('month').valueOf();
    utils.planner.getPlanned(s, e).then((r) => {
      console.log(r);
      //Tagging
      r.quotes = r.quotes.map((x) => ({
        ...x,
        type: (x.type) ? x.type : 'quotes',
      }))
      r.jobs = r.jobs.map((x) => ({
        ...x,
        type: 'jobs'
      }))
      let events = r.jobs.concat(r.quotes)
      events = events.map((x) => {
        return {
          id: x.id,
          type: x.type,
          title: x.displayId + " " + x.displayName,
          start: new Date(x.start),
          end: new Date(x.end),
          data: x.quote,
          style: {backgroundColor: this.getBackground(x.type)},
          allDay: true
        }
      });

      this.setState({events: events});       
    });

  }

  fetchScheduleMonth(m){
    utils.planner.getSchedule(m).then((r) => {
      var evts = [];

      for(var i = 0; i < r.length; i++){
        var ranges = [];
        var diff = 0;
        var range = {
          start: r[i].schedule[0],    
          end: 0
        }
        var last = 0;
        for(var o = 0; o < r[i].schedule.length; o++){
          diff = (r[i].schedule[o] - ((last > 0) ? last : range.start)) / 1000 / 60 / 60 / 24;

          if(diff <= 1){
            range.end = r[i].schedule[o] + (12 * 60 * 60 * 1000);
          }
          last = r[i].schedule[o];
          if(diff > 1){
            ranges.push(Object.assign({}, range));
            range.start = r[i].schedule[o];
            range.end = r[i].schedule[o];
            last = 0;
          }
        }
        ranges.push(range);
        for(var o = 0; o < ranges.length; o++){
          evts.push({
            id: evts.length,
            title: r[i].name,
            start: new Date(ranges[o].start),
            end: new Date(ranges[o].end),   
            allDay: true
          });
        }
      }
      this.setState({events: evts}); 
    });      
  }

  toggleModal(state){
    this.setState({showModal: state});
  }

  _changeMonth(m){
    //      this.fetchScheduleMonth(m);
    this.getQuoteSchedule(m);
    this.setState({time: m})
  }


  _refresh(){
    var m = this.state.time;
    //        this.fetchScheduleMonth(m);
    this.getQuoteSchedule(m);
  }


  onNavigate(date){
    //        this.fetchScheduleMonth(moment(date));
    this.setState({time: moment(date)});
  }

  _addSchedule(){
    this.setState({showModal: true});
  }

  _toggleMenu(){
    let showMenu = this.state.showMenu;
    this.setState({showMenu: !showMenu})
  }

  filterEvents(evts){
    let objectFilters = this.state.filters;
    let filters = []
    for(var k in objectFilters){
      if(objectFilters[k]){
        filters.push(k)
      }
    }

    return evts.filter((a) => filters.indexOf(a.type) > -1);
  }

  selectSpace(event){
      this.setState({
        selectedEvent:{
          start: event.start,
          end: event.end
        },
        showModal: true
      })
  }

  render(){
    return (
      <Paper className="month-container"> 
        <PlanningModal 
          open={this.state.showModal} 
          event={this.state.selectedEvent}
          onClose={() => this.setState({showModal: false, selectedEvent: null})}/>
        <div style={{ 
          background: "#f5f5f5",
          opacity: this.state.showMenu ? 1 : 0, 
          width: this.state.showMenu ? 180 :0, 
          transition: 'width 250ms, opacity 200ms', 
          height: '100%'}}>
          <FilterMenu onFilterChange={(filters) => this.setState({filters: filters})} filters={this.state.filters}/>
        </div>
        <div className="month-container__inner">
          <div className="month-header">
            <div className="month-header__main">
              <IconButton 
                className="month-header__menu"
                onClick={this._toggleMenu.bind(this)}>
                <Menu />
              </IconButton>
              <MonthPicker
                onChange={this._changeMonth.bind(this)}
                value={this.state.time}
                displayFormat={"MMMM YYYY"} />

              <IconButton 
                className="month-header__action"
                onClick={this._addSchedule.bind(this)}>
                <Add />
              </IconButton>
            </div>
          </div>
          <div className="month-scheduler">
            <BigCalendar
              localizer={localizer}
              selectable
              onSelectSlot={this.selectSpace.bind(this)}
              view="month" 
              toolbar={false}
              style={{flex: 1}}
              popup={true}
              date={new Date(this.state.time.valueOf())}
              onNavigate={this.onNavigate.bind(this)}
              onSelectEvent={(evt, e) => {
                if(evt.type == "quotes" || evt.type == "designs"){
                  this.setState({selectedEvent: evt, showModal: true});
                }
                console.log("SELECT", evt, e)
              }
              }
              events={this.filterEvents(this.state.events)}

            />
      
          </div> 
        </div>
      </Paper>
    );
  } 
} 
