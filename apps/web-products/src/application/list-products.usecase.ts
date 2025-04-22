// src/application/list-products.usecase.ts
import { Product } from "@web-products/domain/product.entity";
import { ProductApiRepository } from "@web-products/infrastructure/product-api.repository";

export class ListProductsUseCase {
    constructor(private readonly repository: ProductApiRepository) { }

    async execute(): Promise<Product[]> {
        const products = await this.repository.listProducts();
        console.log("UseCase - productos recibidos:", products); // 👈 Este log te dirá si llegan
        return products;
    }
}
