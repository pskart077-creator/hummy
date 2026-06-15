import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hummy.com.br"),
  title: {
    default: "Hummy Original | Desejo, energia e vitalidade",
    template: "%s | Hummy Original",
  },
  description:
    "Conheça Hummy Original, produtos para vitalidade, disposição, confiança e bem-estar em uma rotina simples.",
  icons: {
    icon: [{ url: "/assets/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/assets/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/assets/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Hummy Original | Desejo, energia e vitalidade",
    description:
      "Produtos para vitalidade, disposição, confiança e bem-estar em uma rotina simples.",
    type: "website",
  },
};
