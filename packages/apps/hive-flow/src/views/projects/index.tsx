import React, {
	Component
}from 'react'

import { Route, Routes} from 'react-router-dom';
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
			<Routes>
			<Route  path={`${this.props.match.url}`} element={ProjectList}>
				<Route path = {`/:job`} element = {ProjectSingle} />
			</Route>
			</Routes>
		);
	}
}
