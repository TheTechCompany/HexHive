import { Kafka } from 'kafkajs';
import { nanoid } from 'nanoid';
import axios from 'axios'

const { WEBHOOK_URL, KAFKA_URL } = process.env;

if(!WEBHOOK_URL) throw new Error("No WEBHOOK_URL env provided")
if(!KAFKA_URL) throw new Error("No KAFKA_URL env specified")

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [KAFKA_URL]
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
            submitFileEvent(event).then((parsed) => {
                console.log("File Event", parsed)
            })
            break;
        default:
            break;
    }
}

const submitFileEvent = async (event: HiveEvent) => {
    const r = await axios({
        method: "POST",
        url: WEBHOOK_URL,
        responseType: 'json',
        headers: {
            "HexHive-Job": nanoid()
        }
    });
    return await r.data;
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

    const consumer = kafka.consumer({groupId: 'worker'})

    await consumer.connect()

    await consumer.subscribe({topic: TOPIC, fromBeginning: true})

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            let json = JSON.parse(message.value?.toString() || '{}')
            
            parseEvent(json)

        }
    })

    // await consumer.disconnect()
    // await producer.disconnect()
}

main()