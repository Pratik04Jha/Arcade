import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import "./globals.css";
import Head from "next/head";

// Corrected metadata object
const metadata = {
  title: "Game Arcade | Play Addictive Web Games Online",
  description:
    "Game Arcade is your ultimate destination for online browser games. Enjoy a collection of addictive, fun, and free games anytime, anywhere.",
  keywords:
    "online games, game arcade, free browser games, HTML5 games, fun games, gaming website, web games, play games online",
  author: "Pratik Jha",
  icon: "/Icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <Head>
        {/* Basic SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href={metadata.icon} type="image/png" />

        {/* Open Graph (for Facebook & general previews) */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:creator" content="@yourTwitterHandle" />

        {/* Mobile Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className="overflow-x-hidden">
        <div className="ml-60">
          <SideBar />
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
