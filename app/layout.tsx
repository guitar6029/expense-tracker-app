import 'react-toastify/dist/ReactToastify.css'
import 'tailwindcss/tailwind.css'
import "./global.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";
import ReduxProvider from "./providers";
import type { Metadata } from "next";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Keep track of your expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ReduxProvider>
        <html lang="en">
          <body className={`${roboto.className}`}>
            <Header />
            <main className="container mx-auto p-4">
              {children}
            </main>
            <ToastContainer />
          </body>
        </html>
      </ReduxProvider>
    </ClerkProvider>
  );
}
