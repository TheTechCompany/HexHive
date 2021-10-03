import { Box, Text } from 'grommet';
import React from 'react';
import { ISchedule } from '../../modals';
import {FileHex} from '../../../assets';
import { AvatarList } from '../../avatar-list';
import { stringToColor } from '@hexhive/utils';
import { useContext } from 'react';
import { ScheduleViewContext } from '../context';

interface ContentProps {
    data: ISchedule;

    users: any[];
}

export const Content : React.FC<ContentProps> = ({data, users}) => {

    const { people, equipment, projects } = useContext(ScheduleViewContext)

    const staffNames = () => {
        const names = (data?.people || []).map((x: any) => {
          return people?.find((a) => a.id == x)
        });
        if(names?.length > 0){
        return (
           <Box 
               align="center"
               direction="column" 
               className="staff-container">
              {names.map((item: any) => item && (
                    <Text size='small'>{item.name}</Text>
              ))}
           </Box>);
        }else{
           return null;
        } 
     }


   const plantItems = () => {
      const items = (data?.equipment || []).map((x: any) => {
         return equipment?.find((a) => a.id == x);   
  
      });
      
      if(items.length > 0){
      return (
         <Box direction="column" className="plant-container">
            <Text weight="bold" size="small" className="plant-container-header">Plant required</Text>
            {items.map((item: any) => (
                  <Text size='small'>{item.name}</Text>
            ))}
         </Box>
      );
      }else{
         return null;
      }
   }

   const renderInfo = () => {
    let content = [
     <AvatarList size={24} users={([data?.owner?.id].concat(data?.managers?.map((x) => x || '') || [])).map((x) => {
        if(users && users.length > 0){
         let user = users.find((a: any) => a.id == x)
         return {
          color: stringToColor(user? user.id : x),
           name: user? user.name : ''
         }
        }else{
          return {
            color: '',
            name: ''
          }
        }
       })} />
     ]

     let job = data?.project ? projects?.find((a) => a?.id == data?.project.id) : {files: []}
 
     if(job?.files && job?.files.length > 0){
        content.push(<FileHex height={25} width={25} />)
     }
     return content;
 }

    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            {staffNames()}
            {plantItems()}

            <Box
                direction="row"
                align="center"
                justify="between">
                {renderInfo()}
            </Box>
        </div>
    );
}