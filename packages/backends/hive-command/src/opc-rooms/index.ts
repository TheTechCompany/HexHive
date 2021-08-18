import OPCClient from 'opc-client'
import { Namespace, Server } from 'socket.io'
import { ClientMonitoredItem, ClientMonitoredItemGroup, DataType } from 'node-opcua'
import { IProgramIO } from 'management-models'
import ioList from './io-list'

const devicePrefix = '/Objects/1:Devices'

const DEVICES = [{
    type: "valve",
    value: "State"
},
{
    type: "levelSensor",
    value: "Level"
},
{
    type: 'pressureSensor',
    value: 'Pressure'
},
{
    type: "flowMeter",
    value: "Flow"
},
{
    type: "vsd",
    value: "State"
},
{
    type: "dosingPump",
    value: "State"
},
{
    type: 'blower',
    value: 'State'
}]


//"opc.tcp://localhost:26543"

export class OPCRoom {
    private url: string;
    private client: OPCClient;
    private state: any = {};

    private devices: IProgramIO[];

    private server: Server;
    private room: Namespace;

    constructor(server: Server, tag: string, url: string, devices: IProgramIO[]) {
        this.server = server;
        this.room = server.of(tag)
        this.devices = devices;

        this.url = url;
        this.client = new OPCClient();
       // this.connect();

        this.room.on('connection', (socket) => {
            console.log("Device in dev-room")
            socket.on('device:toggle-state', (msg: {item: string}) => {
                console.log("TOGGLE", msg.item)
                let state = this.state[msg.item] === 'open' ? 'close' : 'open'
                this.client.setDetails(`${devicePrefix}/1:${msg.item}/1:State`, DataType.String, state).then((result) => {
                    console.log("TOGGLE RESULT", result)
                })
            })
        })
    }
/*
    async connect() {
        await this.client.connect(this.url);
        const { monitors, unwrap } = await this.client.subscribeMulti(this.devices.map((device) => {
            let key = DEVICES.find((a) => a.type == device.type)?.value
            let path = `${devicePrefix}/1:${device.label}/1:${key}`
            console.log(path)
            return { path: path, tag: device.label }
        }))

        if (monitors != null) {
            monitors?.on('changed', (monitoredItem, dataValue, index) => {
                let tag = unwrap(index);
                let value = dataValue.value.value

                this.state[tag] = value;

                this.room.emit('device-state:update', this.state)
            })
        }
    }



*/
}
const monitor = (tag: string, monitor: ClientMonitoredItem) => {
    monitor.on('changed', (val) => {
        console.log(tag, val.value.value)
    })
}


const client = new OPCClient("opc.tcp://Rosss-MacBook-Pro-2.local:4840")

client.discover().then((servers) => {
    console.log(servers)
})

//OPCRoom(ioList.devices as any)
