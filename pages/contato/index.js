import Container from '@/components/container';
import Layout from '@/components/layout';

export default function Contato() {
	return (
		<Layout>
			<Container>
				<h1 className="text-4xl mb-8">
					Contato
				</h1>
				<form
					action="#"
					method="post"
					className="max-w-xl mt-8 p-4">
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block">
							Nome:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="w-full p-2 border border-gray-300"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block">
							E-mail:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full p-2 border border-gray-300 "
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="message"
							className="block">
							Mensagem:
						</label>
						<textarea
							id="message"
							name="message"
							required
							className="w-full p-2 border border-gray-300 "></textarea>
					</div>
					<div className="mb-4 flex justify-around gap-8">
						<input
							type="reset"
							value="Limpar"
							className="text-black underline px-4 py-2 cursor-pointer"
						/>
						<input
							type="submit"
							value="Enviar"
							className="bg-black text-white font-semibold px-4 py-2 cursor-pointer"
						/>
					</div>
				</form>
			</Container>
		</Layout>
	);
}
