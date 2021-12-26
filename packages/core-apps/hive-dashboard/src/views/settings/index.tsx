import { Box, List } from 'grommet';
import React from 'react'

export const Settigns : React.FC<any> = (props) => {
    return (
        <Box
            flex
            direction="row">
            <Box
                focusIndicator={false} 
                width="small"
                className="setitngs-menu">
                <List
                    onClickItem={() => {}}
                    data={[
                        "Profile",
                        "Account Security"
                    ]} />
            </Box>
            <Box flex>
            Settings

            </Box>
        </Box>
    );
}