import Container from '@/components/container';
import Layout from '@/components/layout';
import Link from 'next/link';

export default function Entrar() {
	return (
		<Layout>
			<Container>
				<h1 className="text-4xl mb-8">
					Entrar
				</h1>
				<p>
					Ainda não tem o seu cadastro?
					Clique em{' '}
					<span className="underline">
						<Link href="/registrar">
							Cadastrar
						</Link>
					</span>{' '}
					para realizar o seu.
				</p>
				<form
					action="#"
					method="post"
					className="max-w-xl mt-8 p-4">
					<div className="mb-4">
						<label
							htmlFor="registerEmail"
							className="block">
							E-mail:
						</label>
						<input
							type="email"
							id="registerEmail"
							name="registerEmail"
							required
							className="w-full p-2 border border-gray-300"
						/>
					</div>
					<div className="mb-4 relative">
						<label
							htmlFor="registerPassword"
							className="block">
							Senha:{` `}
							<span className="text-gray-600">
								(
								<Link
									href="/esqueci"
									className="underline">
									{`Esqueceu sua senha?`}
								</Link>
								)
							</span>
						</label>
						<input
							type="password"
							id="registerPassword"
							name="registerPassword"
							required
							className="w-full p-2 pr-10 border border-gray-300"
						/>
					</div>
					<div className="mb-4 flex justify-around gap-8">
						<input
							type="reset"
							value="Limpar"
							className="text-black underline px-4 py-2 cursor-pointer"
						/>
						<input
							type="submit"
							value="Entrar"
							className="bg-black text-white font-semibold px-4 py-2 cursor-pointer"
						/>
					</div>
				</form>
			</Container>
		</Layout>
	);
}
