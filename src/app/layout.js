
// import styles from './global.css'
import "./globals.css";
import { Inter, Lora, Roboto } from "next/font/google";
import Link from "next/link";
// import { lora, roboto } from "./font";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AuthProvider from "../components/AuthProvider/AuthProvider";

// const inter = Inter({ subsets: ["latin"] });

const lora = Lora({ subsets: ["latin"], variable: '--body-font-family' });
const roboto = Roboto({ subsets: ["latin"], weight: '400', display: 'swap', variable: '--primary-font-family'});

export const metadata = {
  title: "Tech Blog",
  description: "This is a Tech Blog Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${roboto.variable}`}>
        <AuthProvider>
          <Header></Header>
          {children}
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
