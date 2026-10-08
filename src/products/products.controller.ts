import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProductDto } from "./product.dto.js";
import { IProductRepository } from "./product.repository.js";

@Controller('/products')
export class ProductsController {
    constructor(private readonly productRepository: IProductRepository) { }

    @Post()
    async createProduct(@Body() product: ProductDto) {
        return this.productRepository.addProduct(product)
    }

    @Get()
    async fetchProducts(): Promise<ProductDto[]> {
        return this.productRepository.fetchProducts();
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        await this.productRepository.deleteProduct(id);

        return { message: 'Product deleted successfully.' };
    }
}