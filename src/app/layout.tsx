"use client";
// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "../constants/theme";
import { CounterStoreProvider } from "../../counterStoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Suspense } from "react";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
      <script src="https://richinfo.co/richpartners/telegram/js/rp-ob.js?pub_id=944847&widget_id=352700" async data-cfasync="false"></script>
      <body>
        <TonConnectUIProvider manifestUrl="http://localhost:3000" >
          <Suspense>
            <CounterStoreProvider>
              <ChakraProvider theme={theme}>
                <Flex padding={"0 32px"} style={{ height: '100vh' }}>
                  {children}
                </Flex>
                <ToastContainer />
              </ChakraProvider>
            </CounterStoreProvider>
          </Suspense>
        </TonConnectUIProvider>
      </body>
    </html>
  );
}
