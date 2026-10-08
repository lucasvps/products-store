import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductDto } from "./product.dto.js";


@Injectable()
export class ProductRepository implements IProductRepository {

    private _products: ProductDto[] = []

    async addProduct(product: ProductDto): Promise<ProductDto> {
        product.id = (this._products.length + 1).toString();

        this._products.push(product)

        return product
    }

    async fetchProducts(): Promise<ProductDto[]> {
        return this._products
    }

    async deleteProduct(productId: string): Promise<ProductDto[]> {
        var idx = this._products.findIndex((product) => product.id === productId)

        if (idx === -1) {
            throw new NotFoundException('Product not found');
        }

        return this._products.splice(idx, 1)
    }
}


export abstract class IProductRepository {
    abstract addProduct(product: ProductDto): Promise<ProductDto>;

    abstract fetchProducts(): Promise<ProductDto[]>;

    abstract deleteProduct(productId: string): Promise<ProductDto[]>;
}