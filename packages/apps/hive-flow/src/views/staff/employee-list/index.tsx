import React, { Component, useState } from 'react';

import { Box, Text,  TextInput } from 'grommet'

import { 
   Search as IoSearch
} from 'grommet-icons'

import './index.css';


export const StaffList : React.FC<any> = (props) => {
   const [ employees, setEmployees ] = useState<any[]>([])
   const [ search, setSearch ] = useState<string>('')


   // componentWillMount(){
   //    utils.staff.getAll().then((res) => {
   //       this.setState({ employees : res});
   //    });
   // }

   const _render =() =>{
      var terms = employees.filter(emp => {
         if(search == '') return true; 
         return emp.Name.toLowerCase().includes(search.toLowerCase()); 
      })
   
      return terms.map((x) => {
         return (
           <Box key={x.ID} onClick={() => props.history.push(`${props.match.url}/${x.ID}`)}>
             <img src={`${process.env.PUBLIC_URL}/api/staff/${x.ID}/photo?access_token=${props.token}`} />
              <Text>{x.Name}</Text>
            </Box> 
         );
      });
   }

      return (

        <Box style={{flex: 1, display: 'flex', flexDirection: 'column', padding: 10}}>
            <TextInput 
               icon={<IoSearch />}
              placeholder="Search"
              style={{marginLeft: 10, marginRight: 10, marginBottom: 10}}
         
              value={search}
              onChange={(e) => setSearch(e.target.value)}/>
            <div className="employees">
              <Box direction="row" wrap>
                {_render()} 
              </Box>
           </div> 
         </Box>

      );
   
}

// export default connect((state) => ({
//   token: state.auth.token
// }))(EmployeeList)
