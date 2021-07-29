import React, {
  Component
} from 'react';


import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './index.css';

/*
  Props

  keys: [
    {key: 'JobName', label: 'Job Name', type: 'string', width: 30},
    {key: 'JobID', label: 'Job ID', type: 'int', width: 70}
  ],
  data: [
    {JobID: 121, JobName: "Hahei Plant", ...},
  ]
*/

export default class SortedList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 25,
      orderBy: null,
      orderDirection: true,
      ...props
    }
  }

  updateSort(key){
    if(this.state.orderBy == key){
      this.setState({orderDirection: !this.state.orderDirection})
    }else{
      this.setState({orderDirection: true, orderBy: key})
    }
  }


  get orderDirection(){
    return this.state.orderDirection ? 'desc' : 'asc';
  }

  _renderHeader(){
    const headerItems = this.props.keys.map((x, ix) => (
      <TableCell
        style={{width: `${x.width}%`}} 
        className="sorted-list-header__item"
        sortDirection={this.state.orderBy == x.key ? this.orderDirection : false}
        onClick={this.updateSort.bind(this, x.key)}>

          <TableSortLabel
            active={this.state.orderBy == x.key}
            direction={this.orderDirection} >
        {x.label}
        </TableSortLabel>
      </TableCell>
    ));

    return (
      <TableRow> 
        {headerItems}
      </TableRow>
    );
  }

  _sortData(key, type, direction){
    return this.props.data.sort((a, b) => {
      if(type == 'string'){
        if(direction){
          if(a[key] < b[key]){
            return -1;
          }else{
            return 1;
          }
        }else{
          if(a[key] > b[key]){
            return -1;
          }else{
            return 1;
          }
        }
      }else{
        if(direction){
          return a[key] - b[key]
        }else{
          return b[key] - a[key]
        }
      }
    })
  }

  _renderData(){
    const { page, rowsPerPage } = this.state;

    let data = []
    if(this.state.orderBy){
      let type = this.props.keys.filter((a) => a.key == this.state.orderBy)[0].type;
      data = this._sortData(this.state.orderBy, type, this.state.orderDirection);
    }else{
      data = this.props.data;
    }
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((x) => (
      <TableRow
        className="sorted-list__item"
        style={{background: x.colour || "#FFF", color: x.colour ? "white" : "black"}}
        onClick={(this.props.onClick) ? this.props.onClick.bind(this, x) : null}>
        {this.props.keys.map((k) => (
          <TableCell
            style={{width: `${k.width}%`, color: x.colour ? 'white': 'black' }}
            className="sorted-list__item-data">{x[k.key]}</TableCell>
        ))}
      </TableRow>
    ))
  }
 
  _changePage(evt, newPage){
    this.setState({page: newPage})
  }

  _changeRows(event){
    this.setState({rowsPerPage: parseInt(event.target.value, 10), page: 0})
  }

  render(){
    const { page, rowsPerPage } = this.state;
    return (
      <Paper style={{flex: 1, display: 'flex'}}>
        {this.props.header}
        <Table className="sorted-list__table" style={{display: 'flex', flexDirection: 'column'}}>
          <TableHead>
           {this._renderHeader()}             
          </TableHead>  
          <TableBody style={{height: '100%', display: 'block', boxSizing: 'border-box', overflowY: 'scroll'}}>
            {this._renderData()} 
          </TableBody> 
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                colSpan={3}
                rowsPerPage={rowsPerPage}
                count={this.props.data.length}
                page={page}
                onChangeRowsPerPage={this._changeRows.bind(this)}
                onChangePage={this._changePage.bind(this)} />
            </TableRow>
          </TableFooter>
        </Table> 
      </Paper>
    );
  }
}
