import { Main } from "../components/Main";
import { Product } from "../components/Product";

const DATA = {
  title: 'Lorem ipsum',
  description:
    "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  thumbnailUrl: "https://picsum.photos/id/1060/536/354",
  thumbnailAlt: "Random image",
  rating: 4.5,
};

const Home = () => {
  return (
    <Main>
      <Product data={DATA} />
    </Main>
  );
};

export default Home;
