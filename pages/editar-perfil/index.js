import Container from '@/components/container';
import Layout from '@/components/layout';
import Link from 'next/link';

export default function Editar() {
	return (
		<Layout>
			<Container>
				<h1 className="text-4xl mb-8">
					Alterar dados
				</h1>
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
							placeholder="Almir bindilatti"
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
							placeholder="almirbindilatti@gmail.com"
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
					<div className="mb-4 relative">
						<label
							htmlFor="oldPassword"
							className="block">
							Senha atual:
						</label>
						<input
							type="password"
							id="oldPassword"
							name="oldPassword"
							required
							className="w-full p-2 pr-10 border border-gray-300"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="newPassword"
							className="block">
							Nova Senha:
						</label>
						<input
							type="password"
							id="newPassword"
							name="newPassword"
							required
							className="w-full p-2 border border-gray-300"
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
							value="Atualizar dados"
							className="bg-black text-white font-semibold px-4 py-2 cursor-pointer"
						/>
					</div>
				</form>
			</Container>
		</Layout>
	);
}
