"use client";

import { Header } from "@/components/header/header";
import "./globals.css";
import { Provider } from "react-redux";
import myStore from "@/store/store";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="BjQi6M44-kOEJWK4NSZujRa1e5B8xBYm7KrFY2wj_mU" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
      </head>

      <body>
        {/* ✅ Google AdSense */}
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />

        {/* ✅ Google Analytics (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-V78YVZ0GXM"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V78YVZ0GXM');
            `,
          }}
        />

        {/* ✅ Bootstrap JS */}
        <Script
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        />

        {/* App content */}
        <Provider store={myStore}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
