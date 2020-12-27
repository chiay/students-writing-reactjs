import React, { useState, useRef } from 'react';
import Layout from './Layout';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import useLocalStorage from '../hooks/useLocalStorage';
import loginImg from '../images/undraw_my_password.svg';

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();

	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useLocalStorage('token');

	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setError('');
			setLoading(true);
			const { data } = await login(
				emailRef.current.value,
				passwordRef.current.value
			);
			setLoading(false);
			setToken(data.token);
			history.push('/');
		} catch (err) {
			setError('Wrong email/password. Please try again.');
		}
	}

	return (
		<Layout>
			<div className="login flex flex-jc-sa flex-ai-c">
				<div className="login__input flex flex-col flex-jc-c flex-ai-c">
					<h1 className="">Welcome back!</h1>
					{error && (
						<div className="error">
							<label>{error}</label>
						</div>
					)}
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<input
							type="email"
							placeholder="Email"
							required
							ref={emailRef}
						/>
						<input
							type="password"
							placeholder="Password"
							required
							ref={passwordRef}
						/>
						<button
							type="submit"
							disabled={loading}
							className="btnSubmit"
						>
							Login
						</button>
					</form>
					<Link to="/signup" className="link">
						Don't have an account? Sign Up
					</Link>
				</div>
				<img
					src={loginImg}
					alt="signup"
					width="400"
					height="400"
					className="login__image"
				/>
			</div>
		</Layout>
	);
}
