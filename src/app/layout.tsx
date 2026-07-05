import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ComparePrix - Comparez les prix des supermarchés",
  description:
    "Faites votre liste de courses et comparez les prix dans tous les supermarchés près de chez vous. Trouvez le moins cher !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
