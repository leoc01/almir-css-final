import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PhotoCardCart = ({ text }) => {
	return (
		<div className="my-8 flex items-center gap-4 md:gap-8">
			<Image
				src="/photoalmir.jpg"
				className="object-contain h-20 md:h-28 shrink drop-shadow-2xl"
			/>
			<div className="">
				<h3 className="text-base md:text-lg">
					crianças brincando{' '}
					<span className="text-gray-600 text-sm">
						(TAMANHO: Médio)
					</span>
				</h3>
				<p className="my-1 text-base md:text-lg">
					R$ 9.999,99
				</p>
				<div className="flex justify-between gap-3">
					<Link
						href="/carrinho"
						className="text-sm md:text-base text-gray-500 underline">
						Remover
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PhotoCardCart;
