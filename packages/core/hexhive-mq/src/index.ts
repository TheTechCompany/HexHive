import { Kafka, Producer } from 'kafkajs';
export interface HiveMQOpts {
    clientId: string,
    brokers: string[]
}


export class HiveMQ {

    private client : Kafka;

    private producer : Producer;

    constructor(opts: HiveMQOpts){
        this.client = new Kafka({
            clientId: opts.clientId,
            brokers: opts.brokers
        })

        this.producer = this.client.producer()
    }


    async connect(){
        await this.producer.connect()
    }


    async emitEvent(topic: string, body: any){
        return await this.producer.send({
            topic: topic,
            messages: [
                {value: JSON.stringify(body)}
            ]
        })
    }
}
