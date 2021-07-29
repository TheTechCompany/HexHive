import React, {
    Component, useState
  } from 'react';
  
  import {
      Box,
      Select
  } from 'grommet'

  import styled from 'styled-components'
  import Chip from '@material-ui/core/Chip';
  //import './search-field.css';
  
  export interface SearchFieldProps {
    options?: any[];
    value?: any;
    onChange?: any;
    className?: string;
  }
  
  export const BaseSearchField : React.FC<SearchFieldProps> = (props) => {
    const [ quotes, setQuotes ] = useState<boolean>(true)
    const [ jobs, setJobs ] = useState<boolean>(true);
 
  
    const toggleFilter = (key: string) => {
        if(key == 'quotes'){
            setQuotes(!quotes)
        }else if(key == 'jobs'){
            setJobs(!jobs)
        }
    }
  
    const mapTypes = (type: {
        type: string,
        QuoteID?: string,
        Name?: string,
        JobID?: string,
        JobName?: string
    }) => {

      switch(type.type){
        case 'quote':
          return{
            label: `${type.QuoteID} - ${type.Name}`.substring(0, 40),
            value: "quote:"+type.QuoteID
          }
        case 'job':
          return {
            label: `${type.JobID} - ${type.JobName}`.substring(0, 40),
            value: "job:" + type.JobID
          }
        default:
          return {};
      }
    } 
  
    const filterTypes = (a: {type: string}) => {
      switch(a.type){
        case 'quote':
          return quotes;
        case 'job':
          return jobs;
        default:
          return true;
      }
    }
  
      const { options, value, onChange} = props;
      return (
        <Box 
            direction="column"
            className={props.className}>
          <Box 
            width="100%"
            className="search-field__input">
            <Select 
                labelKey={'label'}
                valueKey={'value'}
                options={options?.filter(filterTypes).map(mapTypes) || []} 
                value={value} 
                onChange={({option})=> onChange(option)}/>
          </Box>
          <Box 
            margin={{top: 'small'}}
            direction="row"
            className="search-field__options">
          
            <Chip 
              className={!jobs ? "job-option" : "job-option selected"}
              clickable
              label="Jobs" 
              onClick={() => toggleFilter('jobs')} />
        <Chip 
              className={!quotes ? "quote-option" : "quote-option selected"}
              label="Quotes"
              clickable
              onClick={() => toggleFilter('quotes')}/>
          </Box>
        </Box>
      );
    
  }

  export const SearchField = styled(BaseSearchField)`
  .search-field__input{
      position: relative;
  }
  .job-option.selected:hover{
    background:  #3f51b59e !important;
  }
  
  .quote-option.selected:hover{
    background: #b5b13fad !important;
  }
  
  .job-option.selected,job-option.selected:focus{
    background: #3f51b5 !important;
    color: white;
  }
  
  .quote-option.selected,quote-option.selected:focus{
    background:  #b5b13f !important;
    color: white;
  }
  
  .job-option {
    margin-right: 8px;
  }
  `