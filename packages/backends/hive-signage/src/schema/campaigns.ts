export default `
	type Campaign {
		id: ID! @id
		name: String
		
		startDate: DateTime
		endDate: DateTime

		analytics: [CampaignAnalytic] @relationship(type: "HAS_ANALYTICS", direction: OUT)
		assets: [CampaignAsset] @ignore
		customer: String
	}


	type CampaignAsset @exclude {
		id: ID! @id
		name: String
		type: String
		size: Int
		mode: Int
		path: String

		cid: String
	}

	type CampaignAnalytic {
		id: ID! @id
		ts: DateTime
		campaign: Campaign @relationship(type: "HAS_ANALYTICS", direction: IN)
		type: String
		value: String
	}
`