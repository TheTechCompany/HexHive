import { Header } from '@thetechcompany/live-ui';
import * as Icons from 'grommet-icons';
import { IntroBlock } from '../../sections/intro-block';

import React from 'react';
import { LandingFooter } from '../../sections/landing-footer';
import { EditorBlock } from '../../sections/editor-block';

export interface LandingPageProps {
    history?: any;
}

export const LandingPage : React.FC<LandingPageProps> = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
            <main style={{flex: 1}}>
                <IntroBlock />
                <EditorBlock />
            </main>
            <LandingFooter />
        </div>
    )
}