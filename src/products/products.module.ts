import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller.js";
import { IProductRepository, ProductRepository } from "./product.repository.js";


@Module({
    controllers: [ProductsController],
    providers: [
        {
            provide: IProductRepository,
            useClass: ProductRepository,
        },
    ]
})

export class ProductsModule { }