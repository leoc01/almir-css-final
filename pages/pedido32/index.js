import Container from '@/components/container';
import Layout from '@/components/layout';
import PhotoCardCart from '@/components/photocardcart';
import PhotoCardFeito from '@/components/photocardfeito';
import Link from 'next/link';

export default function Pedido32() {
	return (
		<>
			<Layout>
				<Container>
					<div className="flex items-center gap-8 border-b-2 border-black py-2 max-w-lg">
						<div>
							<p>
								<span className="font-medium">
									Pedido:{' '}
								</span>
								#32
							</p>
							<p>
								<span className="font-medium">
									Data:{' '}
								</span>
								01/10/2023
							</p>
						</div>
					</div>
					<PhotoCardFeito />
					<PhotoCardFeito />
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
							className="underline">
							Solicitar suporte
						</Link>
					</div>
				</Container>
			</Layout>
		</>
	);
}
