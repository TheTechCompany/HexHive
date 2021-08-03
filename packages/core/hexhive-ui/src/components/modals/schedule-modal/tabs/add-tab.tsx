import { Anchor, Box, Button, Select, Tab, Tabs } from 'grommet';
import { Logout } from 'grommet-icons';
import React, { useMemo, useState } from 'react';
import PlantTab from './plant-tab';
import StaffTab from './staff-tab';
import NoteTab from './note-tab';
import { ISchedule } from '..';
import _ from 'lodash';

export interface AddTabProps {
    item?: ISchedule;
    onChange?: (item: any) => void;
    
    scheduledJobs?: any[];
    todaysSchedule?: any[];

    jobs?: any[];
    plants?: any;
    people?: any;
}

export const AddTab : React.FC<AddTabProps> = ({
    jobs = [],
    plants = [],
    people = [],
    item,
    onChange,
    scheduledJobs,
    todaysSchedule,

}) => {
    const [ jobSearch, setJobSearch ] = useState<string>('')
    
    const [selectedTab, setSelectedTab] = useState<string>('People')

    const tabs = [
        {
            label: "People",
            component: ( 
            <StaffTab
              onChange={(e: any) => onChange?.({...item, people: e})}
              inputData={{
                assigned: {key: 'id', data: scheduledJobs?.map((x: any) => x.people)},
                labelKey: 'name',
                data: people
              }}
              selected={item?.people || []}/>
            )
        },
        {
            label: "Equipment",
            component: (
                <PlantTab
                  onChange={(e: any) => onChange?.({...item, equipment: e})}
                  inputData={{
                    assigned: {key: 'id', data: todaysSchedule?.map((x) => x.equipment)},
                    labelKey: 'name',
                    data: plants || []
                  }}
                  selected={item?.equipment || []}/>
            )
        },
        {
            label: "Notes",
            component: (
                <NoteTab 
                  data={item?.notes || []}
                  onChange={(e: any) => onChange?.({...item, notes: e})}/>
            )
        }
    ]

    const memoJobs = useMemo(() => {
        let j = _.map(jobs, _.partialRight(_.pick, ['id', 'name']))
        return j.map((x: any) => ({...x, id: `${x.id}`}))
    }, [JSON.stringify(jobs)])

    return (
        <Box flex direction="column">
         <Box
          align="center"
          direction="row">
  
        <Box flex>
          <Select
            onSearch={(search) => setJobSearch(search)}
            placeholder="Select Job..."
            labelKey={(opt) => `${opt.id} - ${opt.name}`.substring(0, 42 + 7)}
            options={memoJobs.filter((a: any) => `${a.id} - ${a.name}`.indexOf(jobSearch) > -1)}
            value={item?.project?.id || item?.project}
            valueKey={{key: 'id', reduce: true}}
            onChange={({option}) => {
                console.log(option)
                onChange?.({...item, project: option.id})
            }} />
        </Box>
        {(item && item?.project) && 
        <Box
          direction="column"
          justify='center'>
          <Button  
            margin={"none"}
            hoverIndicator={true}
            a11yTitle="Go to Job"
            icon={<Logout />}
            href={`/dashboard/flow/projects/${item?.project.id}`}/>
        </Box>}
        </Box>

          <Box height={{max: '50vh'}}>
            <Tabs 
              alignControls="start">
              {tabs.map((tab) => (
                <Tab title={tab.label}>
                  {tab.component}
                </Tab>
              ))} 
            </Tabs>
          </Box>
        </Box>
    )
}