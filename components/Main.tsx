import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex-grow container mx-auto">
          {children}
        </main>
      <Footer />
    </div>
  );
};