import React, {
  Component, useState
} from 'react';
import { CheckBox, Text } from 'grommet'

// import './filter-menu.css';


export default (props: any) => {
  const [ menu, setMenu ] = useState<any[]>([  {
    name: "Jobs",
    color: '#3f51b5',
  },
  {
    name: "Quotes",
    color: '#b5b13f'
  },
  {
    name: "Designs",
    color: '#b53f49' 
  }
])


  const _filterChanged = (filter: any, value: any) => {
    let f = props.filters;
    f[filter] = value;
    props.onFilterChange(f)
  }

    return (
      <div className="filter-menu">
        <Text style={{paddingBottom: 8, paddingTop: 8}}>Filters</Text>
        {menu.map((x) => { 
          return (
            <div className="filter-option">
              <CheckBox checked={props.filters[x.name.toLowerCase()]} onChange={(e) => _filterChanged(x.name.toLowerCase(), e.target.checked)} />
              <Text>{x.name}</Text>
            </div>
          )
        })}
      </div>
    );
  
}
