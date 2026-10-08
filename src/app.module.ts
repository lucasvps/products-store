import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { UserController } from './users/user.controller.js';
import { UserRepository } from './users/user.repository.js';
import { UsersModule } from './users/users.module.js';
import { ProductsModule } from './products/products.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UsersModule, ProductsModule],
})

export class AppModule { }
