import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { 
   Search as IoSearch
} from 'grommet-icons'

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect } from 'react-redux';
import utils from '../../../utils';
import './index.css';

var conf = require('../../../conf');

class EmployeeList extends Component {
   constructor(props){
      super(props);
      this.state = {
         employees : [], 
         search : ''
      };
   }

   componentWillMount(){
      utils.staff.getAll().then((res) => {
         this.setState({ employees : res});
      });
   }

   _render(){
      var terms = this.state.employees.filter(emp => {
         var search = this.state.search;
         if(search == '') return true; 
         return emp.Name.toLowerCase().includes(search.toLowerCase()); 
      })
   
      return terms.map((x) => {
         return (
           <GridListTile key={x.ID} onClick={() => this.props.history.push(`${this.props.match.url}/${x.ID}`)}>
             <img src={`${conf.baseURL}/api/staff/${x.ID}/photo?access_token=${this.props.token}`} />
              <GridListTileBar
                  title={x.Name} />
            </GridListTile> 
         );
      });
   }

   render() {
      return (

        <Paper style={{flex: 1, display: 'flex', flexDirection: 'column', padding: 10}}>
            <TextField 
              label="Search"
              style={{marginLeft: 10, marginRight: 10, marginBottom: 10}}
              InputProps={{
                startAdornment: <InputAdornment position="start"><IoSearch /></InputAdornment>
              }} 
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}/>
            <div className="employees">
              <GridList cellHeight={160} cols={(window.innerWidth <= 600) ? 3 : 5}>
                {this._render()} 
              </GridList>
           </div> 
         </Paper>

      ); 
   }
}

export default connect((state) => ({
  token: state.auth.token
}))(EmployeeList)
