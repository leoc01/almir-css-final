import { Montserrat } from 'next/font/google';
import BigText from '@/components/bigtext';
import PhotoList from '@/components/photolist';
import Layout from '@/components/layout';
import PhotoCard from '@/components/photocard';
import PhotoCardDois from '@/components/photocarddois';

const inter = Montserrat({
	subsets: ['latin'],
});

export default function Home() {
	return (
		<>
			<Layout>
				<PhotoList>
					<PhotoCard
						imagem="/aboio.jpg"
						title="Aboio"
					/>
					<PhotoCard
						imagem="/acolheita.JPG"
						title="A Colheita"
					/>
					<PhotoCard
						imagem="/barriguda.JPG"
						title="Barriguda"
					/>
					<PhotoCard
						imagem="/cantarodebarro.jpg"
						title="Cântaro de Barro"
					/>
					<PhotoCard
						imagem="/copacabana.jpg"
						title="Copacabana"
					/>
					<PhotoCard
						imagem="/outonal.jpg"
						title="Outonal"
					/>
					<PhotoCard
						imagem="/lugarnotempo.jpg"
						title="Lugar no Tempo"
					/>
					<PhotoCard
						imagem="/ovoo.jpg"
						title="O Vôo"
					/>
					<PhotoCard
						imagem="/passeiociclico.jpg"
						title="Passeio Cíclico"
					/>
					<PhotoCard
						imagem="/casadefarinha.jpg"
						title="Casa de Farinha"
					/>
					<PhotoCard
						imagem="/barcossanfran.jpg"
						title="Barcos São Francisco"
					/>
					<PhotoCard
						imagem="/replica.JPG"
						title="Réplica"
					/>
				</PhotoList>
			</Layout>
		</>
	);
}
