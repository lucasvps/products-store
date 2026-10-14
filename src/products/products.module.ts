import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller.js";
import { IProductRepository, ProductRepository } from "./product.repository.js";
import { UserExistsValidator } from "../users/validator/user_exists.validator.js";
import { UsersModule } from "../users/users.module.js";


@Module({
    imports: [UsersModule],
    controllers: [ProductsController],
    providers: [
        {
            provide: IProductRepository,
            useClass: ProductRepository,
        },
        UserExistsValidator,
    ]
})

export class ProductsModule { }