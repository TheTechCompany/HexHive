import React from 'react';
import {AvatarList} from '../avatar-list';

import { stringToColor } from '@hexhive/utils'

export interface ManagerListProps {
    managers?: any[];
    users?: any[]
}

export const ManagerList : React.FC<ManagerListProps> = ({
    managers = [],
    users = []
}) => {

    const avatars = managers.map((x, ix) => {
          let user = users.find((a) => a.id == x) || {}
            return {
                name: user.name,
                color: stringToColor(user.id || '')
            }
          
        })
    
    return (<AvatarList users={avatars} />);
    
}


/*
  let tempManagers = this.state.temporaryManagers.filter((a) =>
          {
            let filterOutRemoved = !(this.state.temporaryRemovedManagers.indexOf(a) > -1)
            let filtersOutManagers = !(this.props.jobData.managers.indexOf(a) > 1);
            return filterOutManagers && filterOutRemoved 
          })
        let projectManagers = ([this.props.jobData.owner]).concat(tempManagers.concat(managers))
    
    
*/