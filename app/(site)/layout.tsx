import "../styles/globals.css";
import AmplitudeInitializer from "../components/AmplitudeInitializer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-base-content">
      <AmplitudeInitializer />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-..."
        crossOrigin="anonymous"
      />
        <Navbar />
        <main className="container mx-auto px-4 lg:px-8 py-8 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
