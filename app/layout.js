import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/ui/Footer";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ChakraProvider theme={theme}>
            <Toaster />
            {children}
            <Footer className="footer"/>
          </ChakraProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
