import React, {
	Component
}from 'react'

import {Switch, Route} from 'react-router-dom';
import JobView from './job-one';
import {JobList} from './job-list';

export default class JobContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			...props
		}
	}

	render(){
		return(
			<Switch> 
				<Route path = {`${this.props.match.url}/:job`} component = {JobView} />
				<Route exact path = {`${this.props.match.url}`} component = {JobList} />
			</Switch>
		);
	}
}
