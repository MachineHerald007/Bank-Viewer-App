import React from 'react';
import { GlobalStyle, Container, Link } from './styles'; 
import { useTheme } from "../../../../Theme/Theme"

export const CreateUserButton = () => {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Link href="#" className="transparent">
					<p>
						<span className="bg"></span>
						<span className="base"></span>
						<span className="text">Create User_</span>
					</p>
				</Link>
			</Container>
		</>
	);
};
