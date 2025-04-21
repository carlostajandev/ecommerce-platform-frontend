import { Product } from "@web-products/domain/product.entity";
import { ProductApiRepository } from "@web-products/infrastructure/product-api.repository";

export class ListProductsUseCase {
    constructor(private readonly repository: ProductApiRepository) { }

    async execute(): Promise<Product[]> {
        return this.repository.listProducts();
    }
}
