import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from '../components/Layout/Layout';
import { CartStateContextProvider } from '../components/Cart/CartContext';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CartStateContextProvider>
			<Layout>
				<QueryClientProvider client={client}>
					<Component {...pageProps} />
				</QueryClientProvider>
			</Layout>
		</CartStateContextProvider>
	);
}

export default MyApp;
