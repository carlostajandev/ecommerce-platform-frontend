import { Product } from "@web-products/domain/product.entity";

export class ProductApiRepository {
    private readonly baseUrl = process.env.NEXT_PUBLIC_PRODUCTS_API;

    async listProducts(): Promise<Product[]> {
        const res = await fetch(`${this.baseUrl}`);
        if (!res.ok) throw new Error("Error al obtener productos");
        return res.json();
    }
}
