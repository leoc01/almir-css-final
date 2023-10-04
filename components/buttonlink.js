import React from 'react';
import Link from 'next/link';

const ButtonLink = ({
	text,
	href,
	icon,
	iconPosition,
	className,
}) => {
	return (
		<Link
			href={href}
			className={`${className} flex items-center justify-center text-lg my-1 px-4 py-1`}>
			{icon &&
				iconPosition === 'start' && (
					<img
						src={icon}
						alt=""
						className="mr-2"
					/>
				)}
			{text}
			{icon && iconPosition === 'end' && (
				<img
					src={icon}
					alt=""
					className="ml-2"
				/>
			)}
		</Link>
	);
};

export default ButtonLink;
