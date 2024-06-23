'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';

const { createContext, useState, useEffect, useContext } = require('react');

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
	const [token, setToken] = useState();
	const router = useRouter();
	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const access_token = hash.substring(1).split('&')[0].split('=')[1];
			setToken(access_token);
		} else {
			router.push('/login');
		}
	}, []);

	return (
		<TokenContext.Provider value={token}>{children}</TokenContext.Provider>
	);
};

export const useToken = () => {
	return useContext(TokenContext);
};
