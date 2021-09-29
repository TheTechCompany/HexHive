import { Box, List } from "grommet";
import React from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";

export const Apps = () => {
	const apps = [{name: "Flow"}, {name: "Command"}, {name: "Files"}, {name: "Messages"}, {name: "Automate"}]
	return (
		<Box flex>
			<CRUDList	
				displayKeys={["name"]}
				data={apps}/>
		</Box>
	)	
}