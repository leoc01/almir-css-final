import React from 'react';
import Link from 'next/link';

const PhotoCard = ({ className }) => {
	return (
		<div className={`my-8 ${className}`}>
			<img
				src="/photoalmir.jpg"
				className="object-cover h-64 w-full drop-shadow-2xl"
			/>
			<h4 className="mx-3 mt-4 text-xl">
				crianças brincando
			</h4>
			<p className="mx-3 my-1 text-lg text-gray-600">
				R$ 9.999,99
			</p>
			<Link
				href="/produto"
				className="bg-black text-white grow flex items-center justify-center text-lg m-3 px-4 py-2">
				comprar
			</Link>
		</div>
	);
};

export default PhotoCard;
