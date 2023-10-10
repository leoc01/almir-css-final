import React from 'react';
import Container from './container';
import NavLinkGroup from './navlinkgroup';
import BurgerMenu from './burguermenu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const TopNav = () => {
	const actualLocal = useRouter();

	return (
		<div className="relative">
			<Link
				href="/"
				className="relative block h-24 lg:h-24 xl:h-36 overflow-hidden">
				<img
					src="/almirlogo.png"
					alt="Top Image"
					className="object-left object-cover h-full max-w-none absolute -left-10 lg:left-0"
				/>
			</Link>

			<Container>
				<div className="flex flex-col-reverse lg:flex-row justify-between items-center py-4 mb-6 mt-4">
					<NavLinkGroup />
					<div className="flex justify-between w-full lg:w-auto self-end space-x-4 items-center mb-4 lg:mb-0">
						<Link
							href="/carrinho"
							className="bg-black hover:bg-gray-900 text-white px-4 py-2 flex justify-around items-center gap-2 max-w-fit">
							Ver carrinho
							<Image
								src="./cart.png"
								className="h-6"
							/>
						</Link>
						<BurgerMenu />
					</div>
				</div>
				<div className="mb-12">
					<Link
						href="/"
						onClick={() =>
							actualLocal.back()
						}
						className={`${
							actualLocal.pathname === '/'
								? 'hidden'
								: ''
						} text-gray-500 underline`}>
						{`<- Voltar`}
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default TopNav;
