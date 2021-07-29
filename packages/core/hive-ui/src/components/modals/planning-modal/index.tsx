import React, {
    Component, useEffect, useState
} from 'react';

import {SearchField} from './search-field';
import { Layer, Button, Text, Heading, Box, Select } from 'grommet'

import ColorDot from '../../color-dot';

// import DateRange from '../../material-date-range';
import moment from 'moment';

import {
    Calendar as Event
} from 'grommet-icons'
//import './schedule-modal.css';
import styled from 'styled-components';

//var DatePicker = require('react-bootstrap-date-picker');

export interface PlanningModalProps {
    open: boolean;
    onClose?: any;

    event?: {
        id?: string;
        type?: string;
        start?: Date;
        end?: Date;
        data?: {
            type?: string;
            id?: string;
        }
    };

    className?: string;
}

export const BasePlanningModal : React.FC<PlanningModalProps> = (props) => {
    const [ planType, setPlanType ] = useState<string>('')

    const [ quotes, setQuotes ] = useState<any[]>([]);
    const [ quote, setQuote ] = useState<any>()
    
    const [ mode, setMode ] = useState<string>('create')
    const [ start, setStart ] = useState<Date>()
    const [ end, setEnd ] = useState<Date>()

    useEffect(() => {
        // (async () => {
        // let result = await Promise.all([
        //     (async () => {
        //         let quotes = await utils.quote.getAll()
        //         return quotes.map((x: any) => ({...x, type: 'quote'}))
        //     })(), 
        //     (async () => {
        //         let jobs = await utils.job.getAll()
        //         return jobs.map((x: any) => ({...x, type: 'job'}))
        //     })()
        // ])
        // setQuotes(result[0].concat(result[1]))
        // })()
    }, [])

   
    useEffect(() => {
        if(props.event){
            if(props.event.id){
                setQuote((props.event?.data?.type) ? props.event.data.type + ":" : "quote:" + props.event?.data?.id)
                setPlanType(props.event.type ? props.event.type : 'quotes')
                setStart(props.event?.start)
                setEnd(props.event?.end)
                setMode('edit')
            }else{
                setStart(props.event?.start)
                setEnd(props.event?.end)
                setMode('create')
            }
        }else{
            setQuote(null)
            setStart(undefined)
            setEnd(undefined)
            setMode('create')
        }
    }, [props.event])

    const createQuote = () => {
        let schedule_quote : any;
        var startDate = start?.getTime();
        var endDate = end?.getTime();
      console.log(quotes, quote)
      for(var i = 0; i < quotes?.length; i++){
          let prefix = quotes?.[i].type;
            if(prefix +":"+ quotes?.[i][prefix == 'quote' ? 'QuoteID' : 'JobID'] == quote?.value){
    
                schedule_quote = {
                    id: quotes?.[i][prefix == 'quote' ? 'QuoteID' : 'JobID'],
                  name: quotes?.[i][prefix == 'quote' ? 'Name' : 'JobName'],
                  type: prefix
                }
            }
        }

        
        var schedule = {
          quote: quote,
          start: startDate,
          end: endDate,
          type: planType
        };
      console.log("Planning", schedule);
      
        // if(mode == 'edit'){
        //     if(!props.event?.id) return;
        //     utils.planner.update(props.event?.id, {
        //         ...schedule,
        //         id: props.event?.id
        //     }).then((r: any)=> {
        //         props.onClose();
        //     });        
        //     //Upsert schedule
        // }else{
        //   schedule.end = moment(schedule.end).add(12, 'hours').valueOf();
        //     utils.planner.create(schedule).then((r : any) => {
        //         props.onClose();
        //     });
        // }
    }

    const deleteQuote = () => {
        if(!props.event?.id) return;
        // utils.planner.remove(props.event?.id).then((r: any) => {
        //     props.onClose();
        // });
    }


  const filledIn = () => {
      return !(
          planType != null && 
          quote != null && 
          start != null && 
          end != null) 
  }

  const updateSearch = (item: any) => {
      console.log(item)
      setQuote(item)
  }

  const updateDate = (key: string, value : Date) => {
    if(key == 'start'){
        setStart(value)
    }else if(key == 'end'){
        setEnd(value)
    }
  }   

  const onClose = () => {
      props.onClose?.();
  }

        return props.open ? (
            <Layer 
                onClickOutside={onClose}
                onEsc={onClose}>
                <Box className={props.className} pad="small">
              <Heading margin={{vertical: 'xsmall'}} level='3'>{mode == 'edit' ? 'Edit' : 'Make'} Plans</Heading>

                <Box 
                    width="medium"
                    style={{
                        overflowY: 'visible', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        paddingBottom: '24px'}}> 
                <Box style={{flex: 1, display: 'flex', flexDirection:'column'}}>
                    <Box style={{display: 'flex',  marginBottom: '16px'}}>
                      <SearchField 
                        options={quotes} 
                        onChange={updateSearch} 
                        value={quote || {}}/>
                    </Box>
                  </Box>
                     {/* <DateRange 
                        start={start || new Date()}
                        end={end || new Date()}
                        onChange={updateDate}
                      />
                      */}
                      <div style={{marginTop: 8, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      <Event style={{marginRight: 8}}/>
                      <Select 
                        value={planType} 
                        options={[
                            {color: '#3f51b5', label: 'Job Planning'}, 
                            {color: '#b5b13f', label: 'Quote Planning'}, 
                            {color: '#b53f49', label: "Design Planning"}]}
                        onChange={(e) => setPlanType(`${e.target.value}`)}>
                            {({datum})=> (
                                <Box>
                                    <ColorDot color={datum.color} size={12}/>
                                    <Text>{datum.label}</Text>
                                </Box>
                            )}
                        </Select>
                    </div>
                </Box>
                <Box direction="row" justify="end">
                    {(mode == 'edit') ? (
                        <Button  onClick={deleteQuote} label="Delete" />
                    ) : null}
                    <Button  onClick={onClose} label="Close" />
                    <Button primary disabled={filledIn()} onClick={createQuote} label={(mode == 'edit') ? "Save" : "Create" } />
                </Box>
                </Box>
            </Layer>
        ) : null;
    
}

export const PlanningModal = styled(BasePlanningModal)`

.MuiSelect-select{
    display: flex;
    align-items: center;
    padding-left: 8px;
}
`