import { useQuery } from "@tanstack/react-query";
import { ProductListItem } from "../components/Product";

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data: StoreApiResponse[] = await response.json();
  return data;
};

const ProductCSRPage = () => {
  const { isLoading, data, error} = useQuery(['products'], getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Fail :(</div>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data.map((product) => {
        return <li
          key={product.id}
          className="mx-2"
        >
          <ProductListItem data={{
            title: product.title,
            thumbnailUrl: product.image,
            thumbnailAlt: product.title,
          }} />
        </li>
      })}
    </ul>
  );
};

export default ProductCSRPage;

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
