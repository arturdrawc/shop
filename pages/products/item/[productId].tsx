import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { ProductDetails } from '../../../components/Products/ProductDetails';
import { serialize } from 'next-mdx-remote/serialize';

const ProductIdPage = ({
	data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	if (!data) {
		return <div>Failed... :(</div>;
	}

	return (
		<div>
			<Link href="/products/1">
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

export const getStaticPaths = async () => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=5`,
	);
	const data: StoreApiResponse[] = await response.json();

	return {
		paths: data.map((product) => {
			return {
				params: {
					productId: String(product.id),
				},
			};
		}),
		fallback: false,
	};
};

export type InferGetStaticPathsType<T> = T extends () => Promise<{
	paths: Array<{ params: infer R }>;
}>
	? R
	: never;

export const getStaticProps = async ({
	params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
	if (!params?.productId) {
		return {
			props: {},
			notFound: true,
		};
	}

	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${params?.productId}`,
	);
	const data: StoreApiResponse | null = await response.json();
	if (!data) {
		return {
			props: {},
			notFound: true,
		};
	}

	return {
		props: {
			data: {
				...data,
				longDescription: await serialize(data.longDescription),
			},
		},
	};
};

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
