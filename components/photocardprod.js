import React from 'react';
import ButtonLink from './buttonlink';
import Container from './container';

const PhotoCardProd = ({ text }) => {
	return (
		<Container>
			<div className="my-8 grid grid-flow-row md:grid-flow-col auto-cols-auto gap-x-8">
				<img
					src="/photoalmir.jpg"
					className="object-contain max-h-[92vh] justify-self-center drop-shadow-2xl"
				/>
				<div className="flex flex-col gap-4 md:gap-12">
					<div>
						<h1 className="titulo2">
							crianças brincando
						</h1>
						<p className="my-1 text-xl text-gray-600">
							R$ 9.999,99
						</p>
					</div>
					<div>
						{' '}
						<div className="mb-4">
							<label
								htmlFor="tamanho"
								className="block">
								TAMANHO:
							</label>
							<select
								id="tamanho"
								name="tamanho"
								className="w-full p-2 border border-gray-300 bg-white">
								<option value="small">
									Pequeno
								</option>
								<option value="medium">
									Médio
								</option>
								<option value="large">
									Grande
								</option>
								<option value="xlarge">
									Extra Grande
								</option>
							</select>
						</div>
					</div>
					<ButtonLink
						className="px-24 text-white bg-black"
						text="comprar"
						href="/carrinho"
					/>
				</div>
			</div>
			<h3 className="titulo3">
				descrição
			</h3>
			<p className="text-lg">
				Essa foto foi tirada em tal lugar
				de crianças brincando em um
				momento especial.
			</p>
			<p className="text-lg">
				A fotografica é entregue com uma
				moldura de tal material no tamanho
				99cm x 99cm.
			</p>
			<h3 className="titulo3">
				fotografias relacionadas
			</h3>
		</Container>
	);
};

export default PhotoCardProd;
