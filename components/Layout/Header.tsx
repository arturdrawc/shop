import Link from 'next/link';
import { useRouter } from 'next/router';
import { CartBar } from '../Cart/CartBar';

const routes = [
	{ name: 'Home', href: '/' },
	{ name: 'ProductsSSG', href: '/products/1' },
];

export const Header = () => {
	const router = useRouter();

	return (
		<header className="flex h-16 items-center justify-between bg-gray-800 px-6 lg:px-8">
			<nav>
				<div className="flex space-x-4">
					{routes.map((route, index) => {
						return (
							<Link
								key={index}
								href={route.href}
							>
								<a
									className={
										'rounded-md px-3 py-2 text-sm font-medium ' +
										(router.pathname === route.href
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white')
									}
								>
									{route.name}
								</a>
							</Link>
						);
					})}
				</div>
			</nav>

			<CartBar />
		</header>
	);
};
