import Link from 'next/link';

const FooterSection = ({
	title,
	links,
}) => {
	return (
		<>
			<div>
				<h3 className="pb-2">
					<strong>{title}</strong>
				</h3>
				{links ? (
					<ul className="pl-6">
						{links.map((link, index) => (
							<li
								key={index}
								className="underline pb-1">
								<Link href={link.path}>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				) : (
					<div className="flex gap-4 mt-4">
						<img
							src="./pix.png"
							className="h-12"
						/>
						<img
							src="./stripe.png"
							className="h-12"
						/>
						<img
							src="./mastercard.png"
							className="h-12"
						/>
						<img
							src="./visa.png"
							className="h-12"
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default FooterSection;
