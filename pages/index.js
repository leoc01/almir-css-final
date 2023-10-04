import { Montserrat } from 'next/font/google';
import BigText from '@/components/bigtext';
import PhotoList from '@/components/photolist';
import Layout from '@/components/layout';
import PhotoCard from '@/components/photocard';
import PhotoCardDois from '@/components/photocardDois';

const inter = Montserrat({
	subsets: ['latin'],
});

export default function Home() {
	return (
		<>
			<Layout>
				<BigText text="A fotografia é um recorte, é um espelho de um ato humano" />
				<PhotoList>
					<PhotoCard />
					<PhotoCardDois />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
				</PhotoList>
			</Layout>
		</>
	);
}
