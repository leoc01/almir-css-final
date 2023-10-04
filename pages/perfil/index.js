import Container from '@/components/container';
import Layout from '@/components/layout';
import Link from 'next/link';

export default function Perfil() {
	return (
		<>
			<Layout>
				<Container>
					<h1 className="text-4xl mb-8">
						Meu perfil
					</h1>
					<div className="flex justify-between items-center max-w-5xl">
						<div>
							<p className="text-xl font-medium">
								Almir Bindilatti
							</p>
							<p className="text-xl">
								<span className="font-medium">
									E-mail:{' '}
								</span>
								almirbindilatti@gmail.com
							</p>
							<p className="text-xl">
								<span className="font-medium">
									CPF:{' '}
								</span>
								999.999.999-99
							</p>
							<Link
								href="/editar-perfil"
								className="bg-black text-white px-4 py-2 flex justify-center max-w-sm mt-8">
								Alterar dados
							</Link>
						</div>
						<div>
							<p className="text-xl mb-6">
								Pedidos realizados
							</p>
							<div className="flex items-center gap-8 border-b-2 border-black py-2">
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
								<Link
									href="/pedido32"
									className="underline">{`Ver pedido >`}</Link>
							</div>
							<div className="flex items-center gap-8 border-b-2 border-black py-2">
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
								<Link
									href="/pedido32"
									className="underline">{`Ver pedido >`}</Link>
							</div>
						</div>
					</div>
				</Container>
			</Layout>
		</>
	);
}
