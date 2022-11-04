import Link from "next/link";
import { useRouter } from "next/router";

const PAGES_AMOUNT = 10;

export const ProductsPaginationCSR = () => {
  const router = useRouter();
  const getPaginationStepClasses = (pageNumber: number) => {
    const currentPage = Number(router.query.page) || 1;
    return currentPage === pageNumber
    ? 'font-bold text-pink-500 border-pink-500'
    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';
  };

  const pages = [];
  for (let i = 0; i < PAGES_AMOUNT; i++) {
    const pageNumber = i + 1;
    pages.push(
      <Link
        key={i}
        href={{
          pathname: router.pathname,
          query: { ...router.query, page: pageNumber },
        }}
      >
        <a className={
						'inline-flex items-center border-t-2 px-4 pt-4 text-sm '
            + getPaginationStepClasses(pageNumber)
          }
        >
          {pageNumber}
        </a>
      </Link>
    );
  }

  return (
		<nav className="flex items-center justify-between  px-4 sm:px-0">
			<div className="mx-auto md:-mt-px">{pages}</div>
		</nav>
  );
};