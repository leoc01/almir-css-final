import React from 'react';
import Link from 'next/link';

const NavLinkGroup = () => {
	return (
		<div className="flex flex-wrap justify-center gap-x-10 text-lg">
			<Link
				href="/"
				className="text-gray-600 underline">
				natureza
			</Link>
			<Link href="/" className="">
				humanidade
			</Link>
			<Link
				href="/"
				className="text-gray-600 underline">
				B&W
			</Link>
			<Link
				href="/"
				className="text-gray-600 underline">
				poéticas
			</Link>
			<Link
				href="/"
				className="text-gray-600 underline">
				outras
			</Link>
		</div>
	);
};

export default NavLinkGroup;
