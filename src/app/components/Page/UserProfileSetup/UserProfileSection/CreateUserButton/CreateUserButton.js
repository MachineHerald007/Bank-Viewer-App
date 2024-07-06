import React, {useEffect} from 'react';
import { GlobalStyle, Container, Link } from './styles'; 
import { useTheme } from "../../../../Theme/Theme";

export const CreateUserButton = ({ onClick }) => {
    const { theme } = useTheme();
	return (
		<>
			<GlobalStyle />
			<Container>
				<Link href="#" className="transparent" onClick={onClick}>
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