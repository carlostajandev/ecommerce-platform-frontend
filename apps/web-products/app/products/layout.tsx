// app/products/layout.tsx

import React from "react";

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Productos</h2>
            <div>{children}</div>
        </section>
    );
}
