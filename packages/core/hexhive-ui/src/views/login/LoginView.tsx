import { Box, Text, TextInput } from 'grommet';
import React from 'react';

export interface LoginViewProps {

}

export const LoginView : React.FC<LoginViewProps> = (props) => {
	return (
		<Box flex>
			<Text>Login</Text>
			<Box>
				<TextInput placeholder="Username" />
			</Box>
		</Box>
	)
}