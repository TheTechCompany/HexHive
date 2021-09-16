import {TaskRegistry} from '.'

import { apply } from './k8s'

const tr = new TaskRegistry()

const td = tr.formatTaskDefinition(`test-task`,`
    - name: run-test
      image: alpine:edge 
      script: |
        #!/usr/bin/env sh
        echo "/workspace/test" > $(results.converted-file.path)
`, [
    {
        name: 'stp-file',
        type: 'file'
    }
], [
    {
        name: 'converted-file',
        type: 'file'
    }
])

const pd = tr.formatPipelineDefinition(`test-pipeline`, [
    {
        task: 'test-task',
        name: 'test',
        inputs: [{source: 'origin', sourceHandle: 'output', targetHandle: 'input'}]
    }
], [])

apply(td).then((resp) => {
    console.log(resp)
})