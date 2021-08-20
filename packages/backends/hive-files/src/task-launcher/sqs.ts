import SQS from 'aws-sdk/clients/sqs';
import { nanoid } from 'nanoid';


const sqs = new SQS({region: 'ap-southeast-2'});

sqs.sendMessage({
    QueueUrl: 'https://sqs.ap-southeast-2.amazonaws.com/471796009502/ConvertFiles.fifo',
    MessageBody: JSON.stringify({
        task: 'STP2GLB:1',
        container: 'STP-GLB',
        file: '123'
    }),
    MessageGroupId: 'run-tasks',
    MessageDeduplicationId: nanoid()
}, (err, data) => {
    console.log(err, data)
})