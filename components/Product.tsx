interface ProductProps {
  data: {
    title: string,
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  };
}

export const Product = ({ data }: ProductProps) => {
  return (
    <div className="p-4 border-2 rounded-lg">
      <h2>
        {data.title}
      </h2>

      <div className="flex flex-col sm:flex-row">
        <div className="overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5">
          <img
            src={data.thumbnailUrl}
            alt={data.thumbnailAlt}
            className="object-cover object-center"
          />

        </div>

        <div className="mt-3 sm:mt-0 sm:ml-4">
          <p className="text-md font-semibold text-gray-900 sm:pr-12">
            {data.description}
          </p>

          <div className="mt-3">
            Rating:
            <span className="ml-4 font-semibold">
              {data.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};