import type { Metadata } from "next";
import { raleway } from "@/app/ui/fonts";
import Sidenav from "@/app/ui/sidenav";
import "./global.css";

export const metadata: Metadata = {
  title: `Martin Moraga's Portfolio`,
  description: "Hi, this is Martin Moraga, welcome to this website",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} min-h-full bg-custom-gradient bg-cover bg-center`}>
        <div className="flex flex-col md:flex-row flex-grow min-h-screen">
            <div className="flex flex-col order-2 md:order-1 justify-start items-center mx-auto">
              <Sidenav />
            </div>
            {children}
        </div>
      </body>
    </html>
  );
}
