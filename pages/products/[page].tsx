import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductListItem } from "../../components/ProductDetails";
import {
  ProductsPaginationSSG,
  PAGES_AMOUNT,
  PRODUCTS_PER_PAGE,
} from "../../components/ProductsPaginationSSG";

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ProductsPaginationSSG />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map((product) => {
          return (
            <li key={product.id} className="mx-2">
              <ProductListItem
                data={{
                  id: product.id,
                  title: product.title,
                  thumbnailUrl: product.image,
                  thumbnailAlt: product.title,
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductPage;

export const getStaticPaths = async () => {
  const pages: { page: string }[] = [];
  for (let i = 0; i < PAGES_AMOUNT; i++) {
    pages.push({ page: String(i + 1) });
  }

  return {
    paths: pages.map(({ page }) => ({
      params: {
        page,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ page: string | undefined }>) => {
  const page = Number(params?.page);
  const offset = page
    ? PRODUCTS_PER_PAGE * page - PRODUCTS_PER_PAGE
    : 0;

  const response = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_PER_PAGE}&offset=${offset}`
  );
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
