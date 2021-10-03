import React from 'react'
import { TextArea } from 'grommet'
export const NoteTab = ({notes, updateNotes}: any) => {
    return (
        <>
            <TextArea 
                value={notes}
                onChange={updateNotes}
                focusIndicator={false}
                rows={8}
                placeholder="Notes" />
        </>
    );
}