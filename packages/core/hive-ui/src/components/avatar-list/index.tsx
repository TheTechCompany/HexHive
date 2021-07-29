import React from 'react';

import {Avatar} from 'grommet';

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
            <Avatar style={style}>{x.name?.split(' ').map((x) => x[0]).join('')}</Avatar>
          )
        })
        }
    </div>
  )
}
