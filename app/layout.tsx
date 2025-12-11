import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "@/components/ui/fonts";
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer/footer";

export const metadata: Metadata = {
  title: "Mi Quinder",
  description:
    "La aplicación que necesitas para gestionar tu guardería o estancia infantil.",
  creator: "Nalotec",
  authors: [{ name: "Nalotec", url: "https://nalotec.com" }],
  openGraph: {
    title: "Mi Quinder",
    description:
      "La aplicación que necesitas para gestionar tu guardería o estancia infantil.",
    locale: "es_MX",
    siteName: "Mi Quinder",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${quicksand.className} antialiased`}>
        <Header />
        <main className="py-[55px] xl:pt-[103px] w-full px-3 xl:px-20 max-w-8xl mx-auto border-t">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
