import { Kafka } from 'kafkajs';
import { nanoid } from 'nanoid';
import {KubeConfig, CoreV1Api, loadYaml, loadAllYaml, KubernetesObject, KubernetesObjectApi} from '@kubernetes/client-node';

const kc = new KubeConfig();
kc.loadFromDefault()


// new K8S();
const k8sApi = kc.makeApiClient(CoreV1Api);
const client = KubernetesObjectApi.makeApiClient(kc)

const { KAFKA_URL } = process.env;

if(!KAFKA_URL) throw new Error("No KAFKA_URL env specified")

const kafka = new Kafka({
    clientId: 'k8s-manager',
    brokers: [KAFKA_URL]
})

const TOPIC = 'k8s-update';

interface HiveEvent {
    service: "Files" | "Messages" | "Flow" | "Command" | "Design",
    event: "convert_files" | "uploaded_files",
    data: any
}


client.read({apiVersion: 'tekton.dev/v1beta1', kind: 'Task', metadata: {name: 'stp2glb'}}).then((d) => {
    console.log(d)
})


export const apply = async (spec: string) => {
    const specifications = loadAllYaml(spec)
    const created: KubernetesObject[] = [];

    for(const spec of specifications){
 // this is to convince the old version of TypeScript that metadata exists even though we already filtered specs
        // without metadata out
        spec.metadata = spec.metadata || {};
        spec.metadata.annotations = spec.metadata.annotations || {};
        delete spec.metadata.annotations['kubectl.kubernetes.io/last-applied-configuration'];
        spec.metadata.annotations['kubectl.kubernetes.io/last-applied-configuration'] = JSON.stringify(spec);
        try {
            // try to get the resource, if it does not exist an error will be thrown and we will end up in the catch
            // block.
            console.log(spec.metadata)
            // console.log(spec)
            const r = await client.read(spec) //{apiVersion: 'tekton.dev/v1beta1', kind: 'Task', metadata: {name: spec.metadata.name}});
            console.log("BODY", r.body)
            // we got the resource, so it exists, so patch it

            const response = await client.patch(spec, "true", undefined, undefined, undefined, {
                headers: {
                    'Content-Type': 'application/merge-patch+json'
                }
            });
            created.push(response.body);
        } catch (e) {
            console.log("DIDNT GET", e)
            // we did not get the resource, so it does not exist, so create it

            // const response = await client.create(spec);
            // created.push(response.body);
        }

        // console.log(created[created.length - 1])
    }
    return created;

}


const main = async () => {
    // const producer = kafka.producer()

    // await producer.connect()

    // await producer.send({
    //     topic: TOPIC,
    //     messages: [
    //         {value: JSON.stringify({
    //             service: "Files",
    //             event: "convert_files",
    //             data: {
    //                 inputs: ["123"]
    //             }c
    //         })}
    //     ]
    // })

    const consumer = kafka.consumer({groupId: 'k8s-update-worker'})

    await consumer.connect()

    await consumer.subscribe({topic: TOPIC, fromBeginning: true})

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            let json = JSON.parse(message.value?.toString() || '{}')
            
            if(json.action == "apply"){
                await apply(json.payload)
            }

        }
    })

    // await consumer.disconnect()
    // await producer.disconnect()
}

main()