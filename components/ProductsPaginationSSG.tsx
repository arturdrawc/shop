import Link from "next/link";
import { useRouter } from "next/router";

export const PAGES_AMOUNT = 10;
export const PRODUCTS_PER_PAGE = 25;

export const ProductsPaginationSSG = () => {
  const router = useRouter();
  const getPaginationStepClasses = (pageNumber: number) => {
    const currentPage = router.asPath;
    return currentPage === `/products/${pageNumber}`
      ? 'font-bold text-pink-500 border-pink-500'
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
  };

  const pages = [];
  for (let i = 0; i < PAGES_AMOUNT; i++) {
    const pageNumber = i + 1;
    pages.push(
      <Link
        key={i}
        href={`/products/${pageNumber}`}
      >
        <a className={"border-t-2 pt-4 px-4 inline-flex items-center text-sm "
          + getPaginationStepClasses(pageNumber) }>
          {pageNumber}
        </a>
      </Link>
    );
  }

  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="hidden md:-mt-px md:flex">
        {pages}
      </div>
    </nav>
  );
};
