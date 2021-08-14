import { Box } from 'grommet';
import Editor from 'rich-markdown-editor'
import React from 'react'
import { BaseStyle } from '@hexhive/styles';

export const HiveMindEditor : React.FC<any> = (props) => {
    const searchWiki = (search: string) => {
        return fetch(`http://13.210.13.198/pages?search=${search}`).then((r) => r.json())
    }

    return (
        <Box margin={{horizontal: 'large', top: 'xsmall'}}>
            <Editor
             onSearchLink={async (term) => {
                const searchResults = await searchWiki(term)
                return searchResults.map((x: {_id: string, title: string}) => ({
                    title: x._id,
                    subtitle: "Wikipedia",
                    url: `https://en.wikipedia.org/wiki/${x._id}`
                })) || [{title: "Test", subtitle: "Sub", url: "Link"}];
            }}
            defaultValue="## Hello World" />
        </Box>
    );
}