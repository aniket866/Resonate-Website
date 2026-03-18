import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://resonate-website-bt1h-git-open-graph-aniket866s-projects.vercel.app"),
  title: "Resonate - Social Voice Platform",
  description:
    "Resonate is an Open Source social voice platform maintained by AOSSIE. Join rooms, talk to people, and connect with the community.",
  icons: {
    icon: "/resonate_logo_white.png",
    apple: "/resonate_logo_white.png",
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Resonate - Social Voice Platform",
    description:
      "Resonate is an Open Source social voice platform maintained by AOSSIE. Join rooms, talk to people, and connect with the community.",
    url: "https://resonate-website-bt1h-git-open-graph-aniket866s-projects.vercel.app",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resonate - Social Voice Platform",
    description:
      "Resonate is an Open Source social voice platform maintained by AOSSIE. Join rooms, talk to people, and connect with the community.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
