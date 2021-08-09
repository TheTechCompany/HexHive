import { useQuery } from '../../../gqless';
import { DataTable, Box, TextInput, Select } from 'grommet';
import React, {
  Component, useEffect, useState
} from 'react';

import { RouteComponentProps } from 'react-router-dom';

// import { useQuery } from '../../../gqless';
import { JobHeader } from './header';

export interface JobListProps extends RouteComponentProps {
}

export const JobList : React.FC<JobListProps> = (props) => {
  
  const [ filter, setFiler ] = useState<any>({})

  const [ direction, setDirection ] = useState<"asc" | "desc" | undefined>()
  const [ property, setProperty ] = useState<string>()

  const [ listKeys, setListKeys ] = useState<any[]>([
    {key: 'ID', label: 'Job ID', type: 'int', width: 30},
    {key: 'name', label: 'Job Name', type: 'string', width: 50},
    {key: 'status', label: 'Status', type: 'string', width: 20}
  ])


  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: true
  })

  const projects = query.ProjectMany();


  const selectJob = (job : {JobID: string}) => {
    props.history.push(`${props.match.url}/${job.JobID}`)
  }

  const getJobs = () => {
    let items = projects?.map((x) => ({id: x?.id, name: x?.name, status: x?.status}))

    if(property && direction){
      items = items?.sort((first, last) => {
        let a : any = first;
        let b: any = last;
        return direction == 'asc' ? 
          (a[property] == b[property] ? 0 : (a[property] > b[property] ? 1 : -1))
          : (a[property] == b[property] ? 0 : (a[property] < b[property] ? 1 : -1))
      })
    }

    if(filter.status && filter.status != "All"){
      items = items?.filter((a) => a.status == filter.status)
    }

    if(filter.search){
      items = items?.filter((a) => {
        let name = a.name?.toLowerCase() || ''
        let id = a.id?.toLowerCase() || ''

        let search = filter.search.toLowerCase() || ''
        

        return name?.indexOf(search) > -1 || id?.indexOf(search) > -1 || `${id} ${name}`.indexOf(search) > -1
      }) 
    }

 
    return items
  }


    return (false) ? null : (
      <Box
        flex
        direction="column">
     
      <JobHeader 
        filter={filter}
        onFilterChange={(filter) => setFiler(filter)}
        jobs={projects || []} />
      <Box 
        flex
        overflow={{vertical: 'auto'}}
        round="xsmall"
        background="neutral-1"
        className="jobs-page">
        <DataTable
          background={{
            header: { color: 'accent-1', opacity: 'strong' },
          }}
          pin
          onSort={({property, direction}) => {
            setProperty(property)
            setDirection(direction)
          }}
          columns={[
            {
              property: 'id',
              header: 'ID',
              size: 'xsmall',
              sortable: true
            },
            {
              property: 'name',
              header: 'Project name',
              size: 'large',
              sortable: true
            },
            {
              property: 'status',
              header: 'Status',
              sortable: true,
              size: 'small',
              align: 'center'
            }
          ]}
          onClickRow={({datum}) => datum.id && selectJob({JobID: datum?.id})}
          data={getJobs()} />
       {/* <SortedList 
          orderBy={"JobID"}
          keys={listKeys}
          data={}
       onClick={selectJob.bind(this)}/>*/}
      </Box>
      </Box>

    );
  
}
