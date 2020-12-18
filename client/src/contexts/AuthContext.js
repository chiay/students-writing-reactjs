import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();

	async function signUp(email, password) {
		try {
			console.log('Try to sign up');
			const res = await axios.post(
				'/api/user/register',
				{ email, password },
				{ headers: { 'Content-Type': 'application/json' } }
			);

			if (res) setCurrentUser(res);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	}

	const value = { currentUser, signUp };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
