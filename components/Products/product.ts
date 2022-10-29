import { MDXRemoteSerializeResult } from 'next-mdx-remote';

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

export interface ProductListItemProps {
	data: ProductListItem;
}

export interface ProductProps {
	data: ProductDetails;
}