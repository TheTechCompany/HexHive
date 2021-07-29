import React, {
  Component
} from 'react';

import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField'; 
import {
    Close as ClearIcon
} from 'grommet-icons'
import './index.css';

export default class NotedList extends Component {
  
  _onChange(index, value){
    let data = this.props.data;
    data[index] = value;
    this.props.onChange(data);
  }

  _insertEmpty(){
    let data = this.props.data;
    data.push('')
    this.props.onChange(data)
  }

  _removeItem(index){
    let data = this.props.data;
    data.splice(index, 1);
    this.props.onChange(data);
  } 

  render(){
    return (
      <List className="noted-list" style={{flex: 1}}>
        {this.props.data.map((x, ix) => (
          <ListItem key={ix}>
            <TextField
              autoFocus
              fullWidth
              value={x}
              placeholder="Enter note here..."
              onKeyDown={(e) => {if(e.key == 'Enter'){this._insertEmpty() }}}
              onChange={(e) => this._onChange(ix, e.target.value)} />
            <IconButton onClick={this._removeItem.bind(this, ix)}>
              <ClearIcon />
            </IconButton>
          </ListItem>
        ))}
        <ListItem
          onClick={this._insertEmpty.bind(this)}
          button
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <span>Add Note +</span>
        </ListItem>
      </List> 
    );
  }
}
