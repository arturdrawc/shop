import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCartState } from '../Cart/CartContext';
import { ProductListItemProps } from './product';
import formatAsMoney from '../../utils/formatAsMoney';

export const ProductListItemCSR = ({ data }: ProductListItemProps) => {
	const cartState = useCartState();
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<Link href={`/CSR/item/${data.id}`}>
			<a
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
			>
				<div className="m-3 rounded shadow-md hover:shadow-pink-500">
					<div className="mx-auto w-48">
						<Image
							layout="responsive"
							width={9}
							height={16}
							objectFit="contain"
							src={data.thumbnailUrl}
							alt={data.thumbnailAlt}
						/>
					</div>

					<form className="flex-auto p-6">
						<h2 className="text-lg font-semibold text-slate-900">
							{data.title}
						</h2>

						<div className="h-10 mb-6 flex items-center justify-between text-sm font-medium">
							<div className="text-lg font-semibold text-slate-500">
								{formatAsMoney(data.price)}
							</div>
							{isHovering && (
								<button
									className="h-10 rounded-md bg-pink-500 px-6 font-semibold text-white"
									onClick={(e) => {
										e.preventDefault();
										cartState.addItemToCart({
											id: data.id,
											price: data.price,
											title: data.title,
											count: 1,
										});
									}}
								>
									Add to bag
								</button>
							)}
						</div>
					</form>
				</div>
			</a>
		</Link>
	);
};
