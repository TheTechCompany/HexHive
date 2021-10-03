import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['3.26.93.103:9092']
})

const TOPIC = 'the-topic';

interface HiveEvent {
    service: "Files" | "Messages" | "Flow" | "Command" | "Design",
    event: "convert_files" | "uploaded_files",
    data: any
}

const parseEvent = (event: HiveEvent) => {
    switch(event.service){
        case 'Files':
            console.log(event.data)
            break;
        default:
            break;
    }
}

const main = async () => {
    const producer = kafka.producer()

    await producer.connect()

    await producer.send({
        topic: TOPIC,
        messages: [
            {value: JSON.stringify({
                service: "Files",
                event: "convert_files",
                data: {
                    inputs: ["123"]
                }
            })}
        ]
    })

    // const consumer = kafka.consumer({groupId: 'worker'})

    // await consumer.connect()

    // await consumer.subscribe({topic: TOPIC, fromBeginning: true})

    // await consumer.run({
    //     eachMessage: async ({topic, partition, message}) => {
    //         let json = JSON.parse(message.value?.toString() || '{}')
            
    //         parseEvent(json)

    //     }
    // })

    // await consumer.disconnect()
    await producer.disconnect()
}

main()