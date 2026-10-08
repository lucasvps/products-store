import { Injectable } from "@nestjs/common";
import { UserDto } from "./user.dto.js";

@Injectable()
export class UserRepository implements IUsersRepository {
    private users: UserDto[] = [];

    async save(user: UserDto): Promise<void> {
        this.users.push(user)
    }

    async fetch(): Promise<UserDto[]> {
        return this.users
    }
}

export abstract class IUsersRepository {
    abstract save(user: UserDto): Promise<void>;
    abstract fetch(): Promise<UserDto[]>;
}