import Container from './container';

const PhotoList = ({ children }) => {
	return (
		<Container>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
				{children}
			</div>
		</Container>
	);
};

export default PhotoList;
