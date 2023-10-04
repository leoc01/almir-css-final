import Container from '@/components/container';
import Layout from '@/components/layout';
import PhotoCardProd from '@/components/photocardprod';
import PhotoCard from '@/components/photocard';
import PhotoCardDois from '@/components/photocarddois';
import PhotoList from '@/components/photolist';

export default function Produto() {
	return (
		<>
			<Layout>
				<PhotoCardProd />
				<Container>
					<PhotoList>
						<PhotoCard />
						<PhotoCardDois />
						<PhotoCard className="hidden lg:block" />
					</PhotoList>
				</Container>
			</Layout>
		</>
	);
}
