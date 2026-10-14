import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create_product.dto.js";
import { randomUUID } from "crypto";
import { ProductEntity } from "./product.entity.js";


@Injectable()
export class ProductRepository implements IProductRepository {
    private _products: ProductEntity[] = []

    async addProduct(productData: CreateProductDto): Promise<ProductEntity> {
        const product: ProductEntity = {
            ...productData,
            id: randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        this._products.push(product)

        return product
    }

    async fetchProducts(): Promise<ProductEntity[]> {
        return this._products
    }

    async deleteProduct(productId: string): Promise<ProductEntity[]> {
        var idx = this._products.findIndex((product) => product.id === productId)

        if (idx === -1) {
            throw new NotFoundException('Product not found');
        }

        return this._products.splice(idx, 1)
    }
}


export abstract class IProductRepository {
    abstract addProduct(product: CreateProductDto): Promise<ProductEntity>;

    abstract fetchProducts(): Promise<ProductEntity[]>;

    abstract deleteProduct(productId: string): Promise<ProductEntity[]>;
}