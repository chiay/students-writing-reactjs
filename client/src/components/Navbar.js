import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import logo from '../images/logo.svg';

export default function Navbar() {
	const { currentUser, logout } = useAuth();

	return (
		<div className="container">
			<nav className="nav flex flex-jc-sb flex-ai-c">
				<div className="nav__logo flex flex-ai-c">
					<div className="logo flex flex-jc-c flex-ai-c">
						<img src={logo} alt="logo" width="30" height="30" />
					</div>
					<div className="title">
						<Link to="/" className="text-lg link">
							Students Writing
						</Link>
					</div>
				</div>
				<div className="nav__links">
					<ul className="flex flex-jc-sa">
						<motion.li
							whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
						>
							<Link to="/promptlist" className="link">
								Start Writing
							</Link>
						</motion.li>
						<motion.li
							whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
						>
							<Link to="/about" className="link">
								About
							</Link>
						</motion.li>
						{/* <motion.li
							whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
						>
							<Link to="/contact" className="link">
								Contact Us
							</Link>
						</motion.li> */}
					</ul>
				</div>
				<div className="nav__user">
					{!currentUser && (
						<Link to="/signup" className="signupLink link">
							Sign Up
						</Link>
					)}
					{!currentUser ? (
						<Link to="/login" className="loginLink link">
							Login
						</Link>
					) : (
						<>
							<Link to="/dashboard" className="loginLink link">
								{currentUser.data.alias
									? currentUser.data.alias
									: currentUser.data.email}
							</Link>
							<Link to="/" className="logoutLink link" onClick={logout}>
								Log Out
							</Link>
						</>
					)}
				</div>
			</nav>
		</div>
	);
}
