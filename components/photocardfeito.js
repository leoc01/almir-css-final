import React from 'react';
import Link from 'next/link';

const PhotoCardFeito = ({ text }) => {
	return (
		<div className="my-8 flex items-center gap-4 md:gap-8">
			<img
				src="/photoalmir.jpg"
				className="object-contain h-20 md:h-28 shrink drop-shadow-2xl"
			/>
			<div className="">
				<h3 className="text-base md:text-lg">
					crianças brincando
				</h3>
				<p className="my-1 text-base md:text-lg">
					R$ 9.999,99
				</p>
			</div>
		</div>
	);
};

export default PhotoCardFeito;
