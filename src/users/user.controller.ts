import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create_user.dto.js";
import { IUsersRepository, UserRepository } from "./user.repository.js";

@Controller('/users')
export class UserController {
    constructor(
        private readonly userRepository: IUsersRepository,
    ) { }

    @Post()
    async createUser(@Body() user: CreateUserDto) {
        await this.userRepository.save(user)

        return {
            "message": "User created succesfully", "data": user
        }
    }

    @Get()
    async getUsers() {
        const users = await this.userRepository.fetch()

        return {
            "data": users
        }
    }
}