import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export const Header = () => {
  const router = useRouter();

  return (
    <header>
      <nav className="bg-gray-800 px-6 lg:px-8 flex h-16 items-center">
        <div className="flex space-x-4">
          {routes.map((route, index) => {
            return (
              <Link
                key={index}
                href={route.href}
              >
                <a className={
                    "px-3 py-2 rounded-md text-sm font-medium "
                    + (
                        router.pathname === route.href
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        )
                  }
                >
                  {route.name}
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
