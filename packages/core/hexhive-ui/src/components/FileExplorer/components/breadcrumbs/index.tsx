import { Box, Button } from 'grommet';
import React from 'react';

export interface BreadcrumbProps {
    breadcrumbs: {name: string, id: string}[]
    onBreadcrumbClick: (crumb: {name: string, id: string}) => void
}

export const Breadcrumbs : React.FC<BreadcrumbProps> = (props) => {
    return (
        <Box direction="row">
            {props.breadcrumbs.map((crumb) => (
                <Box direction="row">
                <Button
                    onClick={() => props.onBreadcrumbClick(crumb)}
                    style={{ borderRadius: 3, padding: '2px'}} hoverIndicator plain label={crumb.name} /> 
                /
                </Box>
            ))}
        </Box>
    )
}