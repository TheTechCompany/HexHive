import React from 'react'
import { Box } from 'grommet';
import styled from 'styled-components'
import { BaseStyle } from 'shared/hexhive-styles/src/base';

export interface BubbleProps {
  	children: React.ReactNode
	className?: string;
	style?: any;
}

export const UnstyledBubble : React.FC<BubbleProps> = (props) => {
	return (
		<Box 
			onMouseDown={(e) => e.stopPropagation()}
			elevation="small"
			height={{min: "121px"}}
			width={{min: '200px'}}
			round="xsmall"
			style={props.style}
			background="neutral-1"
			className={props.className}>
			{props.children}
		</Box>
	)
}

export const Bubble = styled(UnstyledBubble)`
	&:before{
		content: "";
		position: absolute;
		right: 100%;
		top: 50%;
		bottom: 50%;
		width: 0;
		height: 0;
		border-top: 6px solid transparent;
		border-right: 12px solid ${BaseStyle.global.colors['neutral-1']};
		border-bottom: 6px solid transparent;
	}
`