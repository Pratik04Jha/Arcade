import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Head from "next/head";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "LudumVerse | Play Addictive Web Games Online",
  description:
    "LudumVerse is your ultimate destination for online browser games. Enjoy a collection of addictive, fun, and free games anytime, anywhere.",
  icons: {
    icon: "/Icon.png",
  },
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" className="bg-black text-white">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} />
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
