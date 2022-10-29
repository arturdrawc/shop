import { Main } from '../components/Main';
import { ProductListItem } from '../components/Products/ProductListItem';

const DATA = {
	id: 1,
	title: 'Lorem ipsum',
	description:
		'Contrary to popular belief, Lorem Ipsum is not simply random text.',
	thumbnailUrl: 'https://picsum.photos/id/1060/536/354',
	thumbnailAlt: 'Random image',
	rating: 4.5,
	price: 9.75,
};

const Home = () => {
	return (
		<Main>
			<ProductListItem data={DATA} />
		</Main>
	);
};

export default Home;
