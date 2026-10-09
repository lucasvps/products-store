import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create_user.dto.js";

@Injectable()
export class UserRepository implements IUsersRepository {
    private users: CreateUserDto[] = [];

    async save(user: CreateUserDto): Promise<void> {
        this.users.push(user)
    }

    async fetch(): Promise<CreateUserDto[]> {
        return this.users
    }
}

export abstract class IUsersRepository {
    abstract save(user: CreateUserDto): Promise<void>;
    abstract fetch(): Promise<CreateUserDto[]>;
}