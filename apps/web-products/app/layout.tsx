// apps/web-products/app/layout.tsx

import "./globals.css"; // Tu hoja de estilos globales
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Plataforma de E-commerce",
    description: "Tienda online con microservicios y microfrontends",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <main className="min-h-screen bg-gray-50 text-gray-900">
                    {/* Aquí puedes inyectar un Navbar o Footer global */}
                    {children}
                </main>
            </body>
        </html>
    );
}
