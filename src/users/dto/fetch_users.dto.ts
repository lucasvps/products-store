import { UserEntity } from "../user.entity.js";

export class FetchUsersResponseDto {
    users: UserResponseDto[];

    constructor(users: UserEntity[]) {
        this.users = users.map(user => new UserResponseDto(user));
    }
}

export class UserResponseDto {
    id: string;
    name: string;

    constructor(user: UserEntity) {
        this.id = user.id;
        this.name = user.name;
    }
} 