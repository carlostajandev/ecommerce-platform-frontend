// src/interfaces/components/ProductList.tsx

import { Product } from "@web-products/domain/product.entity";

interface Props {
    products: Product[];
}

export const ProductList = ({ products }: Props) => {
    if (!products || products.length === 0) {
        return <p className="text-gray-500">No hay productos para mostrar.</p>;
    }

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <li key={product.id} className="border p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-green-600 font-bold">${product.price}</p>
                    <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                </li>
            ))}
        </ul>
    );
};
