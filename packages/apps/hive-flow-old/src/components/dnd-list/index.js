import React, {
  Component
} from 'react';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Checkbox from '@material-ui/core/Checkbox';

import './index.css';
export default class DnDList extends Component {  
  constructor(props){
    super(props);
    this.state = {
      labelKey: props.labelKey,
      selectedLeft: [],
      selectedRight: [] 
    }
  }


  _addToDeselection(item){
    let selected = this.state.selectedRight;
    if(!selected.includes(item)){
      selected.push(item)
    }else{
      var ix = selected.indexOf(item);
      selected.splice(ix, 1);
    }
    this.setState({
      selectedRight: selected
    })
  }

  _addToSelection(item){
    let selected = this.state.selectedLeft;
    if(!selected.includes(item)){
      selected.push(item)
    }else{
      var ix = selected.indexOf(item);
      selected.splice(ix, 1);
    }
    this.setState({
      selectedLeft: selected
    })
  } 

  checkAssigned(item){
    var num = 0;
    const { assignedKey, assignedList } = this.props;

    assignedList.forEach((x) => {
      x.forEach((y) => {
        if(y[assignedKey] == item[assignedKey])
          num ++;
      });
    });

    if(num > 0){
      return (
      <ListItemSecondaryAction>
        <div className="number-badge">
          {num}
        </div>
      </ListItemSecondaryAction>
      );
    }else{
      return null;
    }
  }

  _renderOptions(){
    return this.not(this.props.options, this.props.selected).map((x, ix) => [(
      <ListItem
        key={'options' + ix}
        button
        disableRipple
        role='listitem'
        onClick={this._addToSelection.bind(this, x)}
        >
        <Checkbox 
          checked={this.state.selectedLeft.includes(x)}
          tabIndex={-1}
          disableRipple />
        <ListItemText>
          {x[this.state.labelKey]}
        </ListItemText>
        {(this.props.assignedList) ? this.checkAssigned(x) : null}
      </ListItem>
    ), (<Divider />)])
  }

  _renderSelection(){
    return this.props.selected.map((x, ix) => (
      <ListItem
        key={'selection' + ix}
        button
        role='listitem'
        onClick={this._addToDeselection.bind(this, x)}>
        <Checkbox
          checked={this.state.selectedRight.includes(x)}
          tabIndex={-1}
          disableRipple />
        <ListItemText>{x[this.state.labelKey]}</ListItemText>
      </ListItem>
    ))
  }
  
  _dropped(items){
    console.log("DROPPED")
    console.log(items)
  }

  _addToOutput(){
    this.props.onAdd(this.state.selectedLeft);
    this.setState({selectedLeft: []})
  }

  _addToInput(){
    this.props.onRemove(this.state.selectedRight);
    this.setState({selectedRight: []})  
  }

  not(a, b){
    return a.filter(value => {
      return b.map((x) => x.ID).indexOf(value.ID) === -1
    });
  }

  render(){
    const { key } = this.props;

    return (
      <div className="dnd-list">
        <div className="input-options">
          <List
            component='div'
            role='list'
            dense>
            {this._renderOptions()}
          </List>
        </div>
        <div className="dnd-controls">
          <Button 
            disabled={this.state.selectedLeft.length <= 0} 
            variant="outlined"
            size="small"
            onClick={this._addToOutput.bind(this)}>
            &gt;
          </Button>
          <Button 
            disabled={this.state.selectedRight.length <= 0} 
            variant="outlined"
            size="small"
            onClick={this._addToInput.bind(this)}>
            &lt;
          </Button>
        </div>
        <div className="output-options Droppable">
          <List
            dense
            component='div'
            role='list'>
            {this._renderSelection()}
          </List>
        </div>
      </div>  
    );
  }
}
