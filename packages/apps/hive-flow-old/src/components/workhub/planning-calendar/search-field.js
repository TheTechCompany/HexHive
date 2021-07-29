import React, {
  Component
} from 'react';

import {Select} from 'grommet';
import Chip from '@material-ui/core/Chip';
import './search-field.css';

export default class SearchField extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: true,
      jobs: true
    }
  }

  toggleFilter(key){
    let state = this.state;
    let value = this.state[key];
    state[key] = !value
    this.setState({...state})
  }

  mapTypes(x){
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

  filterTypes(a){
    switch(a.type){
      case 'quote':
        return this.state.quotes;
      case 'job':
        return this.state.jobs;
      default:
        return true;
    }
  }

  render(){
    const { options, value, onChange} = this.props;
    return (
      <div className="search-field">
        <div className="search-field__input">
  
          <Select options={options.filter(this.filterTypes.bind(this)).map(this.mapTypes)} value={value} onChange={onChange}/>
        </div>
        <div className="search-field__options">
        
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
        </div>
      </div>
    );
  }
}
