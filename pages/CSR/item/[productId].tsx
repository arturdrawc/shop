import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ProductDetails } from '../../../components/Products/ProductDetails';
import { serialize } from 'next-mdx-remote/serialize';

const ProductIdPage = () => {
  const router = useRouter();
	const { productId } = router.query;
	console.log(productId);
	const getProduct = async () => {
		const response = await fetch(
			`https://naszsklep-api.vercel.app/api/products/${productId}`,
		);
		const data: StoreApiResponse[] = await response.json();
		return data;
	};

	const { isLoading, data, error } = useQuery<StoreApiResponse[]>(
		['product'],
		getProduct,
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!data || error) {
		return <div>Fail :(</div>;
	}

	return (
		<div>
			<Link href="/CSR">
				<a>Wróć na stronę główną</a>
			</Link>
			<ProductDetails
				data={{
					id: data.id,
					title: data.title,
					thumbnailUrl: data.image,
					thumbnailAlt: data.title,
					description: data.description,
					rating: data.rating.rate,
					longDescription: data.longDescription,
					price: data.price,
				}}
			/>
		</div>
	);
};

export default ProductIdPage;

export interface StoreApiResponse {
	id: number;
	title: string;
	price: number;
	description: string;
	longDescription: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}
