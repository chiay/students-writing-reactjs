import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import signUpImg from '../images/undraw_sign_in.svg';

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const { currentUser, signUp } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	if (currentUser) {
		return <Redirect to="/" />;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError('Passwords do not match.');
		}
		if (passwordRef.current.value.length <= 8) {
			return setError('Password length must be longer than 8.');
		}
		try {
			setError('');
			setLoading(true);
			await signUp(emailRef.current.value, passwordRef.current.value);
			setLoading(false);
			history.push('/');
		} catch (err) {
			setError('Failed to create an account.');
		}
	}

	return (
		<Layout>
			<div className="signUp flex flex-jc-sa flex-ai-c">
				<img
					src={signUpImg}
					alt="signup"
					width="400"
					height="400"
					className="signUp__image"
				/>
				<div className="signUp__input flex flex-col flex-jc-c flex-ai-c">
					<h1 className="">Create an account</h1>
					{error && (
						<div className="error">
							<label>{error}</label>
						</div>
					)}
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<input
							type="email"
							placeholder="*Email"
							required
							ref={emailRef}
						/>
						<input
							type="password"
							placeholder="*Password"
							required
							ref={passwordRef}
						/>
						<input
							type="password"
							placeholder="*Confirm Password"
							required
							ref={confirmPasswordRef}
						/>
						<button
							type="submit"
							disabled={loading}
							className="btnSubmit"
						>
							{!loading ? 'Submit' : 'Loading'}
						</button>
					</form>
					<Link to="/login" className="link">
						Already have an account? Log In
					</Link>
				</div>
			</div>
		</Layout>
	);
}
