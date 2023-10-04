import React from 'react';

const BigText = ({ text }) => {
	return (
		<div className="max-w-xl my-16 text-left mx-auto">
			<p className="text-3xl md:text-4xl mx-5">
				"{text}"
			</p>
		</div>
	);
};

export default BigText;
