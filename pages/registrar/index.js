import Container from '@/components/container';
import Layout from '@/components/layout';
import Link from 'next/link';

export default function Registrar() {
	return (
		<Layout>
			<Container>
				<h1 className="text-4xl mb-8">
					Criar cadastro
				</h1>
				<p>
					Já tem cadastro? Clique em{' '}
					<span className="underline">
						<Link href="/entrar">
							Entrar
						</Link>
					</span>{' '}
					para realizar o Login.
				</p>
				<form
					action="#"
					method="post"
					className="max-w-xl mt-8 p-4">
					<div className="mb-4">
						<label
							htmlFor="registerName"
							className="block">
							Nome:
						</label>
						<input
							type="text"
							id="registerName"
							name="registerName"
							required
							className="w-full p-2 border border-gray-300"
						/>
					</div>
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
					<div className="mb-4">
						<label
							htmlFor="confirmEmail"
							className="block">
							Confirmar E-mail:
						</label>
						<input
							type="email"
							id="confirmEmail"
							name="confirmEmail"
							required
							className="w-full p-2 border border-gray-300"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="cpf"
							className="block">
							CPF:
						</label>
						<input
							type="text"
							id="cpf"
							name="cpf"
							required
							className="w-full p-2 border border-gray-300"
						/>
					</div>
					<div className="mb-4 relative">
						<label
							htmlFor="registerPassword"
							className="block">
							Senha:
						</label>
						<input
							type="password"
							id="registerPassword"
							name="registerPassword"
							required
							className="w-full p-2 pr-10 border border-gray-300"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="confirmPassword"
							className="block">
							Confirmar Senha:
						</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							required
							className="w-full p-2 border border-gray-300"
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
							value="Criar cadastro"
							className="bg-black hover:bg-gray-900 text-white font-semibold px-4 py-2 cursor-pointer"
						/>
					</div>
				</form>
			</Container>
		</Layout>
	);
}
