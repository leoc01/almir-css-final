import Container from '@/components/container';
import Layout from '@/components/layout';

export default function Esqueci() {
	return (
		<Layout>
			<Container>
				<h1 className="text-4xl mb-8">
					Esqueci minha senha
				</h1>
				<p>
					Coloque seu email no campo
					abaixo e clique em "Recuperar
					senha" para recuperar a sua
					senha.
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
					<div className="mb-4 flex justify-around gap-8">
						<input
							type="reset"
							value="Limpar"
							className="text-black underline px-4 py-2 cursor-pointer"
						/>
						<input
							type="submit"
							value="Recuperar"
							className="bg-black hover:bg-gray-900 text-white font-semibold px-4 py-2 cursor-pointer"
						/>
					</div>
				</form>
			</Container>
		</Layout>
	);
}
