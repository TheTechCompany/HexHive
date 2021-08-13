import React, { Component, useState } from 'react';

import { Box, DataTable, Text, TextInput } from 'grommet'

import {
   Search as IoSearch
} from 'grommet-icons'
import { StaffSearchHeader } from './header';
import { useQuery } from '../../../gqless';
import { idText } from 'typescript';


export const StaffList: React.FC<any> = (props) => {
   // const [employees, setEmployees] = useState<any[]>([])
   const [search, setSearch] = useState<string>('')

   const query = useQuery({
      suspense: false,
      staleWhileRevalidate: true
   })

   const [direction, setDirection] = useState<"asc" | "desc" | undefined>()
   const [property, setProperty] = useState<string>()


   const people = query.PeopleMany() || []
   // componentWillMount(){
   //    utils.staff.getAll().then((res) => {
   //       this.setState({ employees : res});
   //    });
   // }

   const filterPeople = (item: any) => {
      if (search.length > 0) {
         return item.name.toLowerCase().includes(search.toLowerCase())
      }
      return true;
   }

   const sortPeople = (left: any, right: any) => {
      if (property && direction) {
         return (direction == 'asc' ?
            (left[property] == right[property] ? 0 : (left[property] > right[property] ? 1 : -1))
            : (left[property] == right[property] ? 0 : (left[property] < right[property] ? 1 : -1)))
      } else {
         return 0;
      }
   }

   return (

      <Box
         style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

         <StaffSearchHeader
            filter={search}
            onFilterChange={(filter) => setSearch(filter)} />

         <Box
            flex
            round="xsmall"
            overflow="scroll"
            background="neutral-1">

            <DataTable
               pin
               onSort={({ property, direction }) => {
                  setProperty(property)
                  setDirection(direction)
               }}
               columns={[
                  {
                     size: 'small',
                     property: 'id',
                     header: "ID",
                     sortable: true
                  },
                  {
                     property: 'name',
                     header: "Name",
                     sortable: true
                  }
               ]}
               data={people.filter(filterPeople).sort(sortPeople)} />
         </Box>
      </Box>

   );

}

// export default connect((state) => ({
//   token: state.auth.token
// }))(EmployeeList)
