import { Box } from 'grommet';
import React, { useCallback, useRef } from 'react';
import { Sidebar } from '../../components/sidebar';
import { HiveMindEditor } from '../../components/editor';
import { BaseHeader } from '../../components/header';
import { useAutomergeDoc } from '@hexhive/collaboration-client';
import { change } from 'automerge';

export const Editor = (props) => {
  const [doc, docRef, update, updateR] = useAutomergeDoc<any>('HiveDoc', '6118759ecacadae6a1de9a5d')

  const updateRef = useRef((changeFn, message) => {

    updateR.current(async (doc) => {
      let result = await changeFn(doc.children)
      console.log(result)
      return result;
    }, "Update document")
    console.log(JSON.stringify(docRef.current))
    // console.log(changeFn(docRef.current.children), message)
  })

  console.log(JSON.stringify(doc))
    return (
        <Box 
        direction="column"
        flex>
          <BaseHeader />
  
        <Box direction="row" flex>
          <Sidebar />
          <HiveMindEditor
            doc={doc.children || [{type: 'paragraph', children: [{text: ""}]}]}
            // value={doc.content}
            onChange={updateRef.current}
              />
        </Box>
      </Box>
    );
}   