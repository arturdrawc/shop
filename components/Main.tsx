import { ReactNode } from 'react';

interface MainProps {
	children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
	return <main className="container mx-auto flex-grow">{children}</main>;
};
