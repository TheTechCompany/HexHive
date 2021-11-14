import campaigns from "./campaigns";
import displays from "./displays";
import gql from 'graphql-tag'

export default gql`
	${campaigns}
	${displays}
`