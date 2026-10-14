import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create_user.dto.js";
import { IUsersRepository } from "./user.repository.js";
import { UserEntity } from "./user.entity.js";
import { randomUUID } from "crypto";
import { FetchUsersResponseDto, UserResponseDto } from "./dto/fetch_users.dto.js";
import { toUnicode } from "punycode";
import { UpdateUserDto } from "./dto/update_user.dto.js";

@Controller('/users')
export class UserController {
    constructor(
        private readonly userRepository: IUsersRepository,
    ) { }

    @Post()
    async createUser(@Body() user: CreateUserDto) {
        const userEntity: UserEntity = {
            ...user,
            id: randomUUID(),
        };

        await this.userRepository.save(userEntity)

        return {
            "message": "User created succesfully", "data": new UserResponseDto(userEntity),
        }
    }

    @Get()
    async getUsers(): Promise<FetchUsersResponseDto> {
        const data = await this.userRepository.fetch()

        return new FetchUsersResponseDto(data);
    }

    @Patch('/:id')
    async updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
        const updateUser = await this.userRepository.update(id, data)

        if (updateUser === undefined) {
            throw new NotFoundException();
        }

        return {
            "message": "User update succesfully", "data": updateUser,
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        const deletedUser = await this.userRepository.delete(id)

        if (deletedUser === undefined) {
            throw new NotFoundException();
        }

        return {
            "message": "User deleted succesfully", "data": deletedUser,
        }
    }
}