import React from "react";
import { TextInput } from 'grommet';
import { SettingsOption as Settings } from 'grommet-icons'
const SettingsPane = (props: any) => {
    return (
        <div style={{display: 'flex', padding: 8, flexDirection: 'column'}}>
            <TextInput  
                type="number"
                placeholder="Scale X" />
            <TextInput
                type="number"
                placeholder="Scale Y" />

        </div>
    )
}
const MenuItem = {
    icon: <Settings />,
    label: "Setings",
    pane: <SettingsPane />
}

export default MenuItem;