import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="pl">
				<Head />
				<body className="bg-white antialiased">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
