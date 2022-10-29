import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { MarkdownContent } from './MarkdownContent';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useCartState } from '../Cart/CartContext';

interface ProductDetails {
	id: number;
	title: string;
	description: string;
	thumbnailUrl: string;
	thumbnailAlt: string;
	rating: number;
	price: number;
	longDescription: MDXRemoteSerializeResult<Record<string, unknown>>;
}

type ProductListItem = Pick<
	ProductDetails,
	'id' | 'title' | 'thumbnailUrl' | 'thumbnailAlt' | 'price'
>;

interface ProductListItemProps {
	data: ProductListItem;
}

interface ProductProps {
	data: ProductDetails;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
	const cartState = useCartState();

	return (
		<div className="rounded-lg border-2 p-4">
			<Link href={`/products/item/${data.id}`}>
				<a>
					<h2>{data.title}</h2>
				</a>
			</Link>

			<div>
				<Image
					layout="responsive"
					width={16}
					height={9}
					objectFit="contain"
					src={data.thumbnailUrl}
					alt={data.thumbnailAlt}
				/>
			</div>

			<button
				onClick={() => {
					cartState.addItemToCart({
						id: data.id,
						price: data.price,
						title: data.title,
						count: 1,
					});
				}}
			>
				Dodaj do koszyka
			</button>
		</div>
	);
};

export const ProductDetails = ({ data }: ProductProps) => {
	return (
		<div className="rounded-lg border-2 p-4">
			<NextSeo
				title={data.title}
				description={data.description}
			/>

			<h2>{data.title}</h2>

			<div className="flex flex-col sm:flex-row">
				<div className="overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5">
					<img
						src={data.thumbnailUrl}
						alt={data.thumbnailAlt}
						className="object-cover object-center"
					/>
				</div>

				<div className="mt-3 sm:mt-0 sm:ml-4">
					<p className="text-md font-semibold text-gray-900 sm:pr-12">
						{data.description}
					</p>

					<MarkdownContent>{data.longDescription}</MarkdownContent>

					<div className="mt-3">
						Rating:
						<span className="ml-4 font-semibold">{data.rating}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
