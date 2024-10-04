import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Peppermint Engineering",
  description: "Powering Nutrition Intelligence",
  themeColor: "#000000", // This sets the browser theme color to black
  openGraph: {
    title: "Peppermint Engineering 🌱",
    description: "Powering Nutrition Intelligence",
    images: [
      {
        url: "https://www.peppermint.engineering/images/preview.png",
        width: 1526,
        height: 948,
        alt: "Peppermint Engineering",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="apple-mobile-web-app-title"
        content="Peppermint Engineering 🌱"
      ></meta>
      <body
        className={`${poppins.className} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script type="text/javascript">
          var sc_project = 13022413; var sc_invisible = 1; var sc_security =
          "b9f0f84b";
        </script>
        <script
          type="text/javascript"
          src="https://www.statcounter.com/counter/counter.js"
          async
        ></script>
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics"
              href="https://statcounter.com/"
              target="_blank"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13022413/0/b9f0f84b/1/"
                alt="Web Analytics"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </body>
      <GoogleAnalytics gaId="G-3N0JHRC8ZP" />
    </html>
  );
}
