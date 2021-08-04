import React from 'react';

import {Avatar, Text} from 'grommet';
import { invertColor } from '@hexhive/utils';

export interface AvatarListProps {
  users?: Array<{name?: string, color?: string}>;

  size?: number
}

export const AvatarList : React.FC<AvatarListProps> =  ({
  users = [],
  size = 32
}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        {users.map((x, ix) => {
          let style : any = {
            width: size,
            height: size,
            fontSize: size / 2,
            backgroundColor: x.color
          }

          if(ix > 0){
            style['transform'] = 'translateX(-' +(size /2) * ix +'px)'
          }

          return(
            <Avatar style={style}>
              <Text color="white" size={`${size * (5/8)}px`} >
                {x.name?.split(' ').map((x) => x[0]).join('')}
              </Text>
            </Avatar>
          )
        })
        }
    </div>
  )
}
//color={invertColor(x.color || '')}