import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { ProductListItemCSR } from '../../components/Products/ProductListItemCSR';
import { ProductsPaginationCSR } from '../../components/Products/ProductsPaginationCSR';

const PRODUCTS_PER_PAGE = 25;

const ProductCSRPage = () => {
	const { query } = useRouter();
	const page = Number(query.page);
	const offset = page ? PRODUCTS_PER_PAGE * page - PRODUCTS_PER_PAGE : 0;

	const getProducts = async () => {
		const response = await fetch(
			`https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_PER_PAGE}&offset=${offset}`,
		);
		const data: StoreApiResponse[] = await response.json();
		return data;
	};

	const { isLoading, data, error } = useQuery<StoreApiResponse[]>(
		['products', offset],
		getProducts,
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!data || error) {
		return <div>Fail :(</div>;
	}

	return (
		<>
			<ProductsPaginationCSR />
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{data.map((product) => {
					return (
						<li key={product.id}>
							<ProductListItemCSR
								data={{
									id: product.id,
									title: product.title,
									thumbnailUrl: product.image,
									thumbnailAlt: product.title,
                  price: product.price,
								}}
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ProductCSRPage;

export interface StoreApiResponse {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}