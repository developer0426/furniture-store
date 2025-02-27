"use client"
import { Header } from "@/components/header/header";
import "./globals.css";
import { Provider } from "react-redux";
import myStore from "@/store/store";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
