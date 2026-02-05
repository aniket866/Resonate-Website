import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata = {
  title: "Resonate - Social Voice Platform",
  description: "Join rooms, talk to people, and connect with the community.",

  metadataBase: new URL("https://resonate.aossie.org"),
  openGraph: {
    title: "Resonate - Social Voice Platform",
    description: "Join rooms, talk to people, and connect with the community.",
    siteName: "Resonate",
    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "Resonate Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Resonate - Social Voice Platform",
    description:
      "Resonate is an Open Source social voice platform maintained by AOSSIE.",
    images: ["/logo512.png"],
  },

  icons: {
    icon: "/resonate_logo_white.svg",
    apple: "/logo192.png",
  },

  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
