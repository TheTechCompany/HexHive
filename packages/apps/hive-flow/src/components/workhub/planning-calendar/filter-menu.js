import React, {
  Component
} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import './filter-menu.css';

const ColorBox = (color) => {
  return withStyles({
    root: {
      color: color,
      '&$checked': {
        color: color
      }
    }
  })(props => <Checkbox color="default" {...props} />)
}
export default class FilterMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: [
        {
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
      ]
    }
  }

  _filterChanged(filter, value){
    let f = this.props.filters;
    f[filter] = value;
    this.props.onFilterChange(f)
  }

  render(){
    const { menu } = this.state;
    const { filters } = this.props;
    return (
      <div className="filter-menu">
        <Typography style={{paddingBottom: 8, paddingTop: 8}} variant='s1'>Filters</Typography>
        <Divider />
        {menu.map((x) => { 
          let Box = ColorBox(x.color);
          return (
            <div className="filter-option">
              <Box checked={filters[x.name.toLowerCase()]} onChange={(e) => this._filterChanged(x.name.toLowerCase(), e.target.checked)} />
              <Typography>{x.name}</Typography>
            </div>
          )
        })}
      </div>
    );
  }
}
