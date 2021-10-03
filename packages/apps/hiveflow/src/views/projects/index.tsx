import React, {
	Component
}from 'react'

import {Switch, Route} from 'react-router-dom';
import {ProjectSingle} from './single';
import {ProjectList} from './list';

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
				<Route path = {`${this.props.match.url}/:job`} component = {ProjectSingle} />
				<Route exact path = {`${this.props.match.url}`} component = {ProjectList} />
			</Switch>
		);
	}
}
