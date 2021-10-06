export default `

	type Project @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID! @id
		name: String
		
		organisation: HiveOrganisation @relationship(type: "HAS_PROJECT", direction: IN)
		
		schedule: [ScheduleItem] @relationship(type: "SCHEDULE_PROJECT", direction: IN)
		plan: [TimelineItem] @relationship(type: "PLANNING", direction: IN)

		startDate: DateTime
		endDate: DateTime
		status: String

	}

	type Estimate @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID! @id
		name: String
		status: String
		date: DateTime
		price: Float
		organisation: HiveOrganisation @relationship(type: "HAS_ESTIMATE", direction: IN)
	}

	type People @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID! @id 
		name: String

		organisation: HiveOrganisation @relationship(type: "HAS_PEOPLE", direction: IN)

	}

	type Equipment @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID! @id
		name: String
		registration: String

		organisation: HiveOrganisation @relationship(type: "HAS_EQUIPMENT", direction: IN)

	}

	type TimelineItemItems @auth(rules: [
		{operations: [READ], where: {item:  {organisation: {id: "$jwt.organisation"}}}},
		{operations: [UPDATE], bind: {item: { organisation: {id: "$jwt.organisation"}}}}
	]) {
		id: ID @id
		type: String
		location: String
		estimate: Float
		item: TimelineItem @relationship(type: "PROJECTED", direction: IN)
	}
	
	union TimelineProject = Project | Estimate

	type TimelineItem @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE], bind: { organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID @id
        timeline: String
        startDate: DateTime
        endDate: DateTime
        notes: String
        items: [TimelineItemItems] @relationship(type: "PROJECTED", direction: OUT)
        project: TimelineProject @relationship(type: "PLANNING", direction: OUT)
		organisation: HiveOrganisation @relationship(type: "PLANNING", direction: IN)
	}

	type ScheduleItem @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID @id
		date: DateTime
		project: Project @relationship(type: "SCHEDULE_PROJECT", direction: OUT)
		people: [People] @relationship(type: "SCHEDULE_PEOPLE", direction: OUT)
		equipment: [Equipment] @relationship(type: "SCHEDULE_EQUIPMENT", direction: OUT)
		notes: [String]
		owner: HiveUser @relationship(type: "CREATED", direction: IN)
		managers: [HiveUser] @relationship(type: "MANAGING", direction: IN)

		organisation: HiveOrganisation @relationship(type: "SCHEDULE", direction: IN)
	}


`