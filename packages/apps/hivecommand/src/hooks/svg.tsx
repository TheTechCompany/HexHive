import React from 'react';

export const useSVGStyle = (Component: any, StyleFunction: (props: any) => any) => {
	return (props: any) => {
		if(!Component) Component = () => <div></div>
		return (<Component {...props} style={{
			...StyleFunction(props)
		}} />);
	}
}