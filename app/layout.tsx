import type { Metadata } from "next";
import { DefaultProviders } from "@/components/default-provider";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "BananaNews",
  description: "Fique por dentro de tudo que rola no mundo da criatividade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DefaultProviders>{children}</DefaultProviders>
      </body>
    </html>
  );
}
