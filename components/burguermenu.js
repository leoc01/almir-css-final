import React, { useState } from 'react';
import Link from 'next/link';

const BurgerMenu = () => {
	const [isOpen, setIsOpen] =
		useState(false);

	return (
		<>
			<button
				className="flex items-center justify-center w-10 h-10 bg-transparent z-99 hover:bg-gray-200"
				onClick={() =>
					setIsOpen(!isOpen)
				}>
				<svg
					className="block h-8 w-8"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true">
					{isOpen ? (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					) : (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					)}
				</svg>
			</button>

			{isOpen && (
				<div className="fixed top-0 right-0 h-full w-full bg-black pt-6 z-10">
					<div className="max-w-7xl h-full mx-auto px-6">
						<div className="grid">
							<button
								className="justify-self-end flex items-center text-white justify-center w-10 h-10 mt-10 bg-transparent z-99"
								onClick={() =>
									setIsOpen(!isOpen)
								}>
								<svg
									className="block h-8 w-8"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
									{isOpen ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									)}
								</svg>
							</button>
						</div>
						<div className="flex flex-col justify-between h-[80vh] max-w-xs">
							<div className="flex flex-col gap-2">
								<Link
									href="/entrar"
									className="text-white underline">
									Entrar
								</Link>
								<p className="text-white">
									ou
								</p>
								<Link
									href="/registrar"
									className="bg-white hover:bg-gray-200 text-black px-4 py-2 flex justify-center">
									Registrar-se
								</Link>
							</div>
							<div className="flex flex-col gap-4">
								<p className="text-white">
									Olá, Almir!
								</p>
								<div className="bg-white p-4 flex flex-col justify-center items-center gap-2">
									<p>
										Há 2 itens no seu
										carrinho.
									</p>
									<Link
										href="/carrinho"
										className="bg-black hover:bg-gray-900 text-white px-4 py-2 flex justify-around items-center gap-2 max-w-fit">
										Ver carrinho
										<img
											src="./cart.png"
											className="h-6"
										/>
									</Link>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<p className="text-white">
									Olá, João!
								</p>
								<div className="bg-white p-4 flex flex-col justify-center gap-2">
									<p>Área do Admin</p>
									<Link
										href="/admin-categorias"
										className="underline">
										- Categorias
									</Link>
									<Link
										href="/admin-varicoes"
										className="underline">
										- Variações de
										produtos
									</Link>
									<Link
										href="/admin-produtos"
										className="underline">
										- Produtos
									</Link>
								</div>
							</div>
							<div className="flex flex-col gap-4 text-white">
								<Link
									href="/perfil"
									className="flex items-center gap-2">
									<img
										src="./profile.png"
										className="h-6"
									/>
									Perfil
								</Link>
								<Link
									href="/"
									className="flex items-center gap-2">
									<img
										src="./logout.png"
										className="h-6"
									/>
									Sair
								</Link>
							</div>
							<div className="flex flex-col gap-4 text-white underline">
								<Link href="/">Loja</Link>
								<Link href="/sobre">
									Sobre Almir Bindilatti
								</Link>
								<Link href="/contato">
									Contato
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default BurgerMenu;
