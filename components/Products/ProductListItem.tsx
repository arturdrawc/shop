import Link from 'next/link';
import Image from 'next/image';
import { useCartState } from '../Cart/CartContext';
import { ProductListItemProps } from './product';

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