"use client"
import { Header } from "@/components/header/header";
import "./globals.css";
import { Provider } from "react-redux";
import myStore from "@/store/store";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>


<script async src="https://www.googletagmanager.com/gtag/js?id=G-V78YVZ0GXM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'G-V78YVZ0GXM');
</script>
      <meta name="google-site-verification" content="BjQi6M44-kOEJWK4NSZujRa1e5B8xBYm7KrFY2wj_mU" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
      </head>

      <body>
        <Provider store={myStore}>
        <Header></Header>
        {children}
        </Provider>
      </body>
    </html>
  );
}
