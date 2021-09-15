import {TaskRegistry} from '.'

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

console.log(td)