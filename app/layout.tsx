import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";
import Head from "next/head";

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

export const metadata: Metadata = {
  title: "Ravenswatch.pro",
  description: "Ravenswatch Wiki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header className="flex items-center p-4">
          <div className="flex items-center">
            <Image
              src="/rw_logo.png"
              alt="Ravenswatch Logo"
              width={48}
              height={48}
              className="h-12 mr-4"
            />
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="/"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="/Heroes"
                  >
                    Heroes
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="/Items"
                  >
                    Items
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="/about"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </body>
    </html>
  );
}
