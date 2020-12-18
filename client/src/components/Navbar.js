import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
	return (
		<div className="container">
			<nav className="nav flex flex-jc-sb flex-ai-c">
				<div className="nav__logo flex flex-ai-c">
					<div className="logo">Logo</div>
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
							<Link to="/promptList" className="link">
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
						<motion.li
							whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
						>
							<Link to="/contact" className="link">
								Contact Us
							</Link>
						</motion.li>
					</ul>
				</div>
				<div className="nav__user">
					<Link to="/signup" className="signupLink link">
						Sign Up
					</Link>
					<Link to="/login" className="loginLink link">
						Login
					</Link>
				</div>
			</nav>
		</div>
	);
}
