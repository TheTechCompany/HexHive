export default `
	type Campaign {
		id: ID! @id
		name: String

		analytics: [CampaignAnalytic] @relationship(type: "HAS_ANALYTICS", direction: OUT)
		assetFolder: String
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
		campaign: Campaign @relationship(type: "HAS_ANALYTICS", direction: IN)
		type: String
		name: String
		data: String
	}
`