import Container from './container';
import FooterSection from './footersection';

const sectionOne = {
	title: 'mapa do site',
	links: [
		{
			title: 'Loja',
			path: '/',
		},
		{
			title: 'Sobre Almir Bidilatti',
			path: '/sobre',
		},
		{
			title: 'Contato',
			path: '/contato',
		},
	],
};

const sectionTwo = {
	title: 'links úteis',
	links: [
		{
			title: 'Dúvidas frequentes',
			path: '/pagina-informativa',
		},
		{
			title: 'Troca e devolução',
			path: '/pagina-informativa',
		},
		{
			title: 'Política de privacidade',
			path: '/pagina-informativa',
		},
		{
			title: 'Termos de uso',
			path: '/pagina-informativa',
		},
	],
};

const Footer = () => {
	return (
		<>
			<div className="bg-black text-white py-12 mt-24">
				<Container>
					<div className="flex flex-col md:flex-row gap-16 justify-around">
						<FooterSection title="formas de pagamento" />
						<FooterSection
							title={sectionOne.title}
							links={sectionOne.links}
						/>
						<FooterSection
							title={sectionTwo.title}
							links={sectionTwo.links}
						/>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Footer;
