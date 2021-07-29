import React, {
    Component
} from 'react';
import {
    Previous as LeftChevron,
    Next as RightChevron
} from 'grommet-icons'
import utils from '../../utils';
import './index.css';
var moment = require('moment');
var conf = require('../../conf');

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default class EmployeeSchedule extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...props,
            time: moment(),
            schedule: days.map((x) => { return [] })
        }
    }

    componentWillReceiveProps(newProps){
        if(this.props !== newProps){
            this.setState({
                ...newProps
            });
        }
    }


    previousWeek(){
        var m = this.state.time.subtract(1, 'weeks');
        this.setState({time: m});
        this._fetchSchedule();
    }

    nextWeek(){
        var m = this.state.time.add(1, 'weeks');
        this.setState({time: m});
        this._fetchSchedule();
    }

    _fetchSchedule(){
        console.log(this.state.time.valueOf());
        utils.schedule.getForStaff(this.state.employee, this.state.time.startOf('isoWeek').valueOf(), this.state.time.endOf('isoWeek').valueOf()).then((r) => {
            this.setState({
                schedule: r
            });
        });
    }

    componentWillMount(){
        this._fetchSchedule();
    }

    _renderDaySchedule(ix){
        const items = this.state.schedule[ix].map((x) => {
            return (
                <div>
                    {x.job.name}
                </div>
            );
        });
        return items;
    }

    _renderDayHeaders(){
        const items = days.map((x, ix) => {
            return (
                <div style={{display: 'flex', flex: 1,justifyContent: 'center'}}>{x}</div>
            );
        });
    
        return (
            <div style={{display: 'flex', boxShadow: '0px 5px 5px -5px gray' }}>

                {items}
            </div>
        );
    }

    _renderDays(){
        const items = days.map((x, ix) => {
            return (
                <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                    <div>
                        {this._renderDaySchedule(ix)}
                    </div>
                </div>
            );
        });
        return (
            <div style={{display: 'flex'}}>
             {items}
            </div>

        );
    }
    
    render(){
        return (
            <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="schedule-header">
                    <LeftChevron style={{cursor: 'pointer'}} onClick={this.previousWeek.bind(this)}/>
                    <div style={{marginLeft: '5px', marginRight: '5px'}}>
                    {this.state.time.startOf('isoWeek').format('DD/MM/YY')} - {this.state.time.endOf('isoWeek').format('DD/MM/YY')}
                    </div>
                    <RightChevron style={{cursor: 'pointer'}} onClick={this.nextWeek.bind(this)}/>
                </div>
                <div style={{flex: 1, display: 'flex', marginTop: '5px', flexDirection: 'column'}}>
                    {this._renderDayHeaders()}
                    {this._renderDays()}
                </div>
            </div>
        );
    }
}
