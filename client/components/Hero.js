import React from 'react';
import Link from 'next/Link';
import Image from 'next/Image'

export default function Hero() {
	return (
		<div className="h-96 p-4 flex justify-around items-center rounded-xl shadow-md bg-gray-100">
			<div className="px-4 ml-20">
				<h1 className="py-4 text-4xl text-left text-yellow-800">
					Welcome to Students Writing!
				</h1>

				<h3 className="py-2 text-xl text-gray-500">
					Sentences, Paragraphs, Essays - All become easy with structure
				</h3>
				<h3 className="py-2 text-xl text-gray-500">
					Learn the structure, view the edits, master writing
				</h3>
				<Link href="/register">
					<button className="px-4 py-2 mt-5 border rounded-xl text-white bg-red-600 hover:bg-red-400 hover:text-yellow-900 transition-colors duration-200">Get Started</button>
				</Link>
			</div>
         <Image src="/undraw_publish_article_icso.svg" alt="write" width="300" height="300"/>
		</div>
	);
}
