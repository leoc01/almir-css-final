import Container from '@/components/container';
import Layout from '@/components/layout';
import PhotoCardCart from '@/components/photocardcart';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Layout>
				<Container>
					<h1 className="text-4xl mb-4">
						Olá, Almir!
					</h1>
					<p className="text-xl">
						Há 2 item no seu carrinho.
					</p>
					<PhotoCardCart />
					<PhotoCardCart />
					<h2 className="mt-24 text-2xl mb-4">
						Frete e pagamento
					</h2>
					<p className="text-lg md:text-xl max-w-2xl mb-6 md:mb-8">
						Realizamos o{' '}
						<span className="font-medium">
							Chekout Seguro
						</span>{' '}
						através da Stripe. Para
						calcular o frete e finalizar a
						compra, clique no botão
						abaixo.
					</p>
					<div className="flex max-w-sm justify-between mb-6 md:mb-8">
						<p className="text-lg md:text-xl">
							Total em produtos
						</p>
						<p className="text-lg md:text-xl text-gray-700">
							R$ 9.999,99
						</p>
					</div>
					<div className="max-w-sm">
						<Link
							href="/carrinho"
							className="bg-black text-white px-4 py-2 flex justify-center max-w-sm mt-8">
							Realizar pagamento
						</Link>
					</div>
				</Container>
			</Layout>
		</>
	);
}
