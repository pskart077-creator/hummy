import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hummyoriginal.com.br"),
  title: {
    default: "Hummy Original | Desejo, energia e vitalidade",
    template: "%s | Hummy Original",
  },
  description:
    "Conheça Hummy Original, produtos para vitalidade, disposição, confiança e bem-estar em uma rotina simples.",
  openGraph: {
    title: "Hummy Original | Desejo, energia e vitalidade",
    description:
      "Produtos para vitalidade, disposição, confiança e bem-estar em uma rotina simples.",
    type: "website",
  },
};
