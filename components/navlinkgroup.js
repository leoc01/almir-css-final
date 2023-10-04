import React from 'react';
import Link from 'next/link';

const NavLinkGroup = () => {
	return (
		<div className="flex flex-wrap justify-center gap-x-10 text-lg">
			<Link
				href="/"
				className="text-gray-600 underline hover:scale-105">
				natureza
			</Link>
			<Link href="/" className="">
				humanidade
			</Link>
			<Link
				href="/"
				className="text-gray-600 underline hover:scale-105">
				B&W
			</Link>
			<Link
				href="/"
				className="text-gray-600 underline hover:scale-105">
				poéticas
			</Link>
			<Link
				href="/"
				className="text-gray-600 underline hover:scale-105">
				outras
			</Link>
			<Link
				href="/"
				className="text-gray-600 underline hover:scale-105">
				animais
			</Link>
		</div>
	);
};

export default NavLinkGroup;
