import campaigns from "./campaigns";
import machines from "./machines";
import gql from 'graphql-tag'
import locations from "./locations";
import schedule from "./schedule";

export default gql`
	${locations}
	${schedule}
	${campaigns}
	${machines}
`