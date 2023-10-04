import React from 'react';
import Container from './container';
import NavLinkGroup from './navlinkgroup';
import BurgerMenu from './burguermenu';
import Link from 'next/link';

const TopNav = () => {
	return (
		<div>
			<Link href="/">
				<img
					src="/almirlogo.png"
					alt="Top Image"
					className="w-full"
				/>
			</Link>

			<Container>
				<div className="flex flex-col-reverse lg:flex-row justify-between items-center py-4 mb-6">
					<NavLinkGroup />
					<div className="flex self-end space-x-4 items-center mb-4 lg:mb-0">
						<Link
							href="/carrinho"
							className="bg-black text-white px-4 py-2 flex justify-around items-center gap-2 max-w-fit">
							Ver carrinho
							<img
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
						className="text-gray-500 underline">{`<- Voltar`}</Link>
				</div>
			</Container>
		</div>
	);
};

export default TopNav;
