// apps/web-products/app/layout.tsx

import "./globals.css"; // Tu hoja de estilos globales
// apps/web-products/app/layout.tsx


export const metadata = {
  title: "Productos",
  description: "Microfrontend de productos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

