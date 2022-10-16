import { InferGetStaticPropsType } from "next";
import { Product } from "../components/Product";

const ProductPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data.map((product) => {
        return <li
          key={product.id}
          className="mx-2"
        >
          <Product data={{
            title: product.title,
            description: product.description,
            rating: product.rating.rate,
            thumbnailUrl: product.image,
            thumbnailAlt: product.title,
          }} />
        </li>
      })}
    </ul>
  );
};

export default ProductPage;

export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data: StoreApiResponse[] = await response.json();

  return {
    props: {
      data,
    },
  };
};

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