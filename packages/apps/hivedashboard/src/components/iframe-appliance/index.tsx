import { Box } from 'grommet';
import React from 'react';
import { BaseHeader } from '../header';

export const IFrameAppliance = () => {
    return (
        <Box 
            direction="column"
            flex>
            <BaseHeader />
            <iframe style={{flex: 1}} src="https://matrix.hexhive.io/_matrix/client/r0/login/sso/redirect/oidc-hexhive_idp?redirectUrl=https%3A%2F%2Fmatrix.hexhive.io%2Felement%2F" >

            </iframe>
        </Box>

    );
}   