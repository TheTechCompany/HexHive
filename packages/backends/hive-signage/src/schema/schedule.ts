export default `
type Schedule {
	id: ID! @id
	name: String

	screens: [ScreenTemplate] @relationship(type: "HAS_SCREEN", direction: OUT)

	tiers: [ScheduleTier] @relationship(type: "SCHEDULE_TIER", direction: OUT)

	campaigns: [Campaign] @relationship(type: "SCHEDULES_CAMPAIGN", direction: OUT, properties: "ScheduleItemProperties")
	locations: [Location] @relationship(type: "USES_SCHEDULE", direction: IN)

	startDate: DateTime
	endDate: DateTime
}

interface ScheduleItemProperties @relationshipProperties {
	tier: String
	screen: String
	startDate: DateTime
	endDate: DateTime
}


type ScheduleTier {
	id: ID! @id
	name: String
	schedule: Schedule @relationship(type: "HAS_TIER", direction: IN)
	percent: Float
	slots: Float
}
`