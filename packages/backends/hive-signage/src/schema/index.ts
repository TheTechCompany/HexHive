import campaigns from "./campaigns";
import displays from "./displays";
import gql from 'graphql-tag'
import clusters from "./clusters";
import computers from "./computers";

export default gql`
	${clusters}
	${computers}
	${campaigns}
	${displays}
`