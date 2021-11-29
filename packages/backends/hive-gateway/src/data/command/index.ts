import { Transaction } from 'neo4j-driver'

export const getDeviceActions = async (tx: Transaction, deploymentId: string, deviceName: string) => {
	//Change this to get program devices not just assigned
  const result = await tx.run(
	`MATCH (device:CommandDevice {id: $id})-[:HAS_PERIPHERAL]->(p)-[:HAS_MAPPING]->(m)-[:USES_DEVICE]->(devices:CommandProgramDevicePlaceholder {name: $deviceName})-[:USES_TEMPLATE]->(template:CommandProgramDevice)
	OPTIONAL MATCH (template)-[:HAS_ACTION]->(actions:CommandProgramDeviceAction)
	RETURN devices{
		network_name: device.network_name,
		actions: collect(actions{.*})
	}`,
	{
		id: deploymentId,
		deviceName: deviceName
	}
  );
  return result.records?.[0]?.get(0) 
}

