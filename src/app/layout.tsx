import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/provider";
import Loader from "@/components/loader/Loader";
import AuthRedirect from "@/app/(auth)/authredirect/AuthRedirect";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Loader />

          <AuthRedirect />
          {children}
        </Providers>
      </body>
    </html>
  );
}
