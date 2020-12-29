import React, { useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	//const [token, setToken] = useLocalStorage('token');

	const config = { headers: { 'Content-Type': 'application/json' } };

	async function signUp(email, password) {
		try {
			const user = await axios.post(
				'/api/user/register',
				{
					email,
					password,
				},
				config
			);
			if (user) {
				setCurrentUser(user);
				return user;
			}
			return;
		} catch (err) {
			console.log(err);
		}
	}

	async function login(email, password) {
		try {
			const user = await axios.post(
				'/api/user/login',
				{
					email,
					password,
				},
				config
			);
			if (user) {
				setCurrentUser(user);
				return user;
			}
		} catch (err) {
			console.log(err);
		}
	}

	const value = { currentUser, signUp, login };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
