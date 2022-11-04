import { Main } from '../components/Main';
import { ProductListItemSSG } from '../components/Products/ProductListItemSSG';

const DATA = {
	id: 1,
	title: 'Lorem ipsum',
	description:
		'Contrary to popular belief, Lorem Ipsum is not simply random text.',
	thumbnailUrl: 'https://picsum.photos/180/320',
	thumbnailAlt: 'Random image',
	rating: 4.5,
	price: 9.75,
};

const Home = () => {
	return (
		<Main>
			<ProductListItemSSG data={DATA} />
		</Main>
	);
};

export default Home;
