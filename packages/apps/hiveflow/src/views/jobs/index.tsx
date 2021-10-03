import React, {
	Component
}from 'react'

import {Switch, Route} from 'react-router-dom';
import {SingleJob} from './job-one';
import {JobList} from './job-list';

export default class JobContainer extends Component<any, any> {
	constructor(props: any){
		super(props);
		this.state = {
			...props
		}
	}

	render(){
		return(
			<Switch> 
				<Route path = {`${this.props.match.url}/:job`} component = {SingleJob} />
				<Route exact path = {`${this.props.match.url}`} component = {JobList} />
			</Switch>
		);
	}
}
