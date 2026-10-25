import type { Metadata, Viewport } from "next";
import { Inria_Serif, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const sourceSans = Source_Sans_3({
	subsets: ["latin"],
	variable: "--font-source-sans",
});

const inriaSerif = Inria_Serif({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-inria-serif",
});

export const metadata: Metadata = {
	title: "Mateo Somoza Diaz",
	description: "Mateo Somoza Diaz — full-stack web developer based in Buenos Aires, Argentina.",
	authors: [{ name: "Mateo Somoza Diaz" }],
	robots: { index: true, follow: true },
};

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#000000",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${sourceSans.variable} ${inriaSerif.variable}`}>
			<body>
				<div className="backdrop" aria-hidden />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
