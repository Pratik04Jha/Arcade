import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Head from "next/head";
import "./globals.css";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Game acrade",
  description: "This is the best game acrade in the entire world",
  icons: {
    icon: "/Icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-zinc-800 text-white">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href={metadata.icon} />
        </Head>
        <body className="overflow-x-hidden">
          <div className="ml-60">
            <ClientLayout>
              <SideBar />
              <Navbar />
              {children}
            </ClientLayout>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
