import { Box, List } from 'grommet'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from '@hexhive/client'

export interface AppListProps extends RouteComponentProps {
    
}

export const AppList : React.FC<AppListProps> = (props) => {
    const query = useQuery({suspense: false, staleWhileRevalidate: true})
    
    const apps = query.hiveAppliances()

    return (
        <Box flex>
            <List 
                primaryKey={"name"}
                onClickItem={({item}) => props.history.push(`/${item.id}`)}
                data={apps}/>
        </Box>
    )
}