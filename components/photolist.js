import Container from './container';
import PhotoCard from './photocard';
import PhotoCardDois from './photocardDois';

const PhotoList = ({ children }) => {
	return (
		<Container>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-12">
				{children}
			</div>
		</Container>
	);
};

export default PhotoList;
