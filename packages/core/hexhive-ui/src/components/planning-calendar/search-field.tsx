import React, {
  Component, useState
} from 'react';

import {Select} from 'grommet';
// import './search-field.css';

export interface SearchFieldProps {
  options: any;
  value: any;
  onChange: any;
}

export const SearchField : React.FC<SearchFieldProps> = (props) => {
  const [ quotes, setQuotes ] = useState<boolean>(true);

  const [ jobs, setJobs ] = useState<boolean>(true);

  const mapTypes = (x: any) => {
    switch(x.type){
      case 'quote':
        return{
          label: x.QuoteID + " - " +x.Name,
          value: "quote:"+x.QuoteID
        }
      case 'job':
        return {
          label: x.JobID + " - " + x.JobName,
          value: "job:" + x.JobID
        }
      default:
        return null;
    }
  } 

  const filterTypes = (a: any) => {
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
      <div className="search-field">
        <div className="search-field__input">
  
          <Select options={options.filter(filterTypes).map(mapTypes)} value={value} onChange={onChange}/>
        </div>
        <div className="search-field__options">
        
 
        </div>
      </div>
    );
  
}


/*
         <Chip 
            className={!this.state.jobs ? "job-option" : "job-option selected"}
            clickable
            label="Jobs" 
            onClick={this.toggleFilter.bind(this, 'jobs')} />
      <Chip 
            className={!this.state.quotes ? "quote-option" : "quote-option selected"}
            label="Quotes"
            clickable
            onClick={this.toggleFilter.bind(this, 'quotes')}/>
*/