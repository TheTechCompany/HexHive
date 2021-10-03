export interface HiveTriggerEvent {
    id?: string;

    appliance?: string; //Appliance ID
    routingKey?: string; //Appliance Event Key
    clientId?: string; //Client ID of message origin
    queuedAt: number;
    data?: {
        [key: string]: any
    }
}