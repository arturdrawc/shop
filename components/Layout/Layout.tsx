import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Head>
				<title>Test sklepu</title>
				<meta
					name="description"
					content="Jakiś opis sklepu"
				></meta>
			</Head>
			<Header />
			<div className="flex-grow">{children}</div>
			<Footer />
		</div>
	);
};
