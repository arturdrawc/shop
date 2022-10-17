import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { ProductDetails } from "../../components/Product";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Failed... :(</div>;
  }

  return (
    <div>
      <ProductDetails
        data={{
          title: data.title,
          thumbnailUrl: data.image,
          thumbnailAlt: data.title,
          description: data.description,
          rating: data.rating.rate,
        }}
      />
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          productId: "1",
        },
      },
    ],
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
}: GetStaticPropsContext<
  InferGetStaticPathsType<typeof getStaticPaths>
>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const response = await fetch(
    `https://fakestoreapi.com/products/${params?.productId}`
  );
  const data: StoreApiResponse | null = await response.json();

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
