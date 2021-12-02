export default `

type Cluster {
	id: ID! @id
	label: String

	tiers: [ClusterTier] @relationship(type: "HAS_TIER", direction: OUT)
	schedule: [ClusterSchedule] @relationship(type: "SCHEDULES_CAMPAIGN", direction: OUT)
	displays: [Display] @relationship(type: "IN_CLUSTER", direction: OUT) 
}

type ClusterTier {
	id: ID! @id
	name: String
	cluster: Cluster @relationship(type: "HAS_TIER", direction: IN)
	percent: Float
	slots: Float
}

type ClusterSchedule {
	id: ID! @id
	tier: ClusterTier @relationship(type: "SCHEDULE_TIER", direction: OUT)
	campaign: Campaign @relationship(type: "SCHEDULES_CAMPAIGN", direction: OUT)
	cluster: Cluster @relationship(type: "SCHEDULES_CAMPAIGN", direction: IN)

	startDate: DateTime
	endDate: DateTime
}
`