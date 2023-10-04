import Footer from './footer';
import TopNav from './topnav';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col justify-between">
			<TopNav />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
