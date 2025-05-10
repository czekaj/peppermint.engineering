import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Script from "next/script";

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

const ivyoraDisplayRegular = localFont({
  src: "./fonts/ivyora-display-regular.woff2",
  variable: "--font-ivyora-display-regular",
});

const ivyoraDisplayBold = localFont({
  src: "./fonts/ivyora-display-bold.woff2",
  variable: "--font-ivyora-display-bold",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Peppermint: Nutrition Intelligence for Professionals",
  description: "Empowering dietitians and nutritionists with automated access to client grocery purchase data for enhanced personalized care and better outcomes.",
  themeColor: "#000000",
  openGraph: {
    title: "Peppermint 🌱 | Professional Nutrition Intelligence",
    description: "The platform providing dietitians with automated, verified client grocery purchase data (online & in-store) to revolutionize personalized nutrition.",
    images: [
      {
        url: "https://www.peppermint.engineering/images/preview.png",
        width: 1526,
        height: 948,
        alt: "Peppermint for Nutrition Professionals",
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
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      ></meta>
      <body
        className={`${poppins.className} ${inter.variable} ${geistMono.variable} ${ivyoraDisplayRegular.variable} ${ivyoraDisplayBold.variable} antialiased`}
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
        <Script src="/popup.js" strategy="afterInteractive" />
      </body>
      <GoogleAnalytics gaId="G-3N0JHRC8ZP" />
    </html>
  );
}
