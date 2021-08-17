import { Box } from 'grommet';
import Editor from 'rich-markdown-editor'
import React from 'react'
import { BaseStyle } from '@hexhive/styles';
import { CollabEditor } from '@hexhive/ui'
import { useState } from 'react';

export const HiveMindEditor : React.FC<any> = (props) => {

    const [ value, setValue ] = useState<string>('')

    const searchWiki = (search: string) => {
        return fetch(`http://13.210.13.198/pages?search=${search}`).then((r) => r.json())
    }

    const nodeString = (item: any) => {
        if(item.text){
            return item.text
        }else{
            return (item.children || []).map(nodeString).join('')
        }
    }
    const parseValue = (value: any[]) => {
        let out_val = ``;

        console.log

        out_val = value.map(nodeString).join(`\n`)

        props.onChange(out_val)
    }

    //These names are backwards
    const serialize = (value: string = '') => {
        return value.split('\n').map((x) => {
            let matchMention = /\[\[@(.+)\]\]/.exec(x)
            let text = x;
            let children : any[] = []

            if(matchMention){
                let character = matchMention[1].trim();
                children.push({type: "mention", character: character, children: [{text: `[[@ ${character}]]`}]})
                text.replace(/\[\[@(.+)\]\]/, '')
                console.log(matchMention)
            }else{

            children.push({text})
            }

            return {type: 'paragraph', children: children}
        })
    }

    return (
        <Box flex margin={{horizontal: 'large', top: 'xsmall'}}>
            <CollabEditor 
                doc={props.doc}
                onChange={props.onChange}
           
                />
            {/* <Editor
                onChange={props.onChange}
                value={props.value}
             onSearchLink={async (term) => {
                const searchResults = await searchWiki(term)
                return searchResults.map((x: {_id: string, title: string}) => ({
                    title: x._id,
                    subtitle: "Wikipedia",
                    url: `https://en.wikipedia.org/wiki/${x._id}`
                })) || [{title: "Test", subtitle: "Sub", url: "Link"}];
            }}
            defaultValue="## Hello World" /> */}
        </Box>
    );
}