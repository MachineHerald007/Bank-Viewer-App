import React, {useEffect} from 'react';

import { GlobalStyle, Container, Link } from './styles'; 
import { useTheme } from "../../../../Theme/Theme";
import { invoke } from "@tauri-apps/api/tauri";

export const CreateUserButton = ({ onClick }) => {
    const { theme } = useTheme();

    useEffect(() => {
        console.log("thme: ", theme)
    }, [])

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