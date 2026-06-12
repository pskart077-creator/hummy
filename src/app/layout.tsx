import { RootShell } from "@/components/layout/root-shell";
import "./globals.css";

export { metadata } from "@/components/layout/root-metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
