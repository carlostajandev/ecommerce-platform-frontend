'use client'

import { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList";
import { Product } from "@web-products/domain/product.entity";
import { ProductApiRepository } from "@web-products/infrastructure/product-api.repository";
import { ListProductsUseCase } from "@web-products/application/list-products.usecase";

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const repo = new ProductApiRepository();
        const useCase = new ListProductsUseCase(repo);

        useCase.execute()
            .then(setProducts)
            .catch((e) => console.error(e))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Cargando productos...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Productos disponibles</h1>
            <ProductList products={products} />
        </div>
    );
}
