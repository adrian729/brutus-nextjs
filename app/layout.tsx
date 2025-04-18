import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import LayoutContent from "./LayoutContent";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='en'>
      <body
        className={
          "antialiased h-screen flex justify-stretch content-stretch items-stretch"
        }
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
