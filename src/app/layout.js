import Navbar from "./components/Module/Navbar";
import "./globals.css";

export const metadata = {
  title: "کافی شاپ",
  description: "کافی شاپ اکبر و ابول برای رزومه کار",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        {children}
      </body>
      {/* <Footer /> */}
    </html>
  );
}
