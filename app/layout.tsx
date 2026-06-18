import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hermandad del Santo Entierro y Nuestra Señora de la Soledad | Manzanares",
  description:
    "Web oficial de la Hermandad del Santo Entierro y Nuestra Señora de la Soledad de Manzanares, Ciudad Real. Cultos, actos, anuncios, Grupo Joven y solicitud de ingreso.",
  keywords: [
    "Hermandad Santo Entierro Manzanares",
    "Nuestra Señora de la Soledad Manzanares",
    "Semana Santa Manzanares",
    "Cofradía Santo Entierro",
    "Hermandad Manzanares Ciudad Real",
  ],
  authors: [{ name: "Hermandad del Santo Entierro y Nuestra Señora de la Soledad" }],
  creator: "Hermandad del Santo Entierro y Nuestra Señora de la Soledad",
  publisher: "Hermandad del Santo Entierro y Nuestra Señora de la Soledad",
  icons: {
    icon: "/escudo.png",
    shortcut: "/escudo.png",
    apple: "/escudo.png",
  },
  openGraph: {
    title: "Hermandad del Santo Entierro y Nuestra Señora de la Soledad",
    description:
      "Web oficial de la Hermandad del Santo Entierro y Nuestra Señora de la Soledad de Manzanares.",
    url: "https://tudominio.com",
    siteName: "Hermandad del Santo Entierro y Nuestra Señora de la Soledad",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/escudo.png",
        width: 1200,
        height: 630,
        alt: "Escudo de la Hermandad del Santo Entierro y Nuestra Señora de la Soledad",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}