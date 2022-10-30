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
		<header className="flex h-16 items-center justify-between px-6 lg:px-8">
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
										'rounded-md px-3 py-2 text-sm font-medium border-2 border-transparent ' +
										(router.pathname.startsWith(route.href)
											? 'text-gray-500 hover:bg-white hover:border-gray-500'
											: 'text-pink-500 hover:bg-white hover:border-pink-500')
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
