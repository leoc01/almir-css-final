import React from 'react';
import ButtonLink from './buttonlink';

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
			<div className="flex justify-between mx-3 gap-3">
				<ButtonLink
					className="grow text-white bg-black"
					text="ver produto"
					href="/produto"
				/>
			</div>
		</div>
	);
};

export default PhotoCard;
