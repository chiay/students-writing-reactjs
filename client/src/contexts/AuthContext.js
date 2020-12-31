import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useLocalStorage('token');

	const config = { headers: { 'Content-Type': 'application/json' } };

	useEffect(() => {
		setLoading(true);
		const verifyUser = async () => {
			const loggedInUser = localStorage.getItem('students-writing-token');
			try {
				if (loggedInUser) {
					const user = await axios.post(
						'/api/user/verifyToken',
						{},
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					);
					if (user) {
						setCurrentUser(user);
					}
				}
			} catch (err) {
				console.log(err);
			}
		};
		verifyUser();
		setLoading(false);
	}, []);

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
				setToken(user.data.token);
			}
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
				setToken(user.data.token);
			}
		} catch (err) {
			console.log(err);
		}
	}

	function logout() {
		setLoading(true);
		setCurrentUser(null);
		localStorage.clear();
		setLoading(false);
	}

	const value = { currentUser, signUp, login, logout };

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
