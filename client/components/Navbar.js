import React from 'react';
import Link from 'next/Link';

export default function Navbar() {
	return (
		<div className="container max-w-full p-2">
			<nav className="flex justify-between items-center p-5 bg-yellow-200 rounded-xl shadow">
				<div className="flex items-center">
					<div className="mr-3">Logo</div>
					<div className="">
						<Link href="/">
							<a className="text-lg">Students Writing</a>
						</Link>
					</div>
				</div>
				<div className="w-auto">
					<ul className="nav__links flex justify-around ">
						<li>
							<Link href="/promptList">
								<a>Start Writing</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<a>Contact Us</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<Link href="/register">
						<a className="px-5 py-2 text-yellow-800">
							Sign Up
						</a>
					</Link>
					<Link href="/login">
						<a className="px-5 py-2 border border-red-300 rounded-xl text-yellow-800 bg-red-400 hover:bg-red-500 transition-colors duration-200">
							Login
						</a>
					</Link>
				</div>
			</nav>
		</div>
	);
}
