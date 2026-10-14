import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateProductDto } from "./dto/create_product.dto.js";
import { IProductRepository } from "./product.repository.js";
import { ProductEntity } from "./product.entity.js";

@Controller('/products')
export class ProductsController {
    constructor(private readonly productRepository: IProductRepository) { }

    @Post()
    async createProduct(@Body() product: CreateProductDto) {
        return this.productRepository.addProduct(product)
    }

    @Get()
    async fetchProducts(): Promise<ProductEntity[]> {
        return this.productRepository.fetchProducts();
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        await this.productRepository.deleteProduct(id);

        return { message: 'Product deleted successfully.' };
    }
}