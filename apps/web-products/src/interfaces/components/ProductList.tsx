import { Product } from "@web-products/domain/product.entity";

interface Props {
    products: Product[];
}

export const ProductList = ({ products }: Props) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((prod) => (
            <div key={prod.id} className="p-4 border rounded shadow">
                <h3 className="text-xl font-semibold">{prod.name}</h3>
                <p className="text-sm text-gray-600">{prod.description}</p>
                <p className="text-blue-500 font-bold">${prod.price}</p>
            </div>
        ))}
    </div>
);
