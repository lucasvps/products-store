import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity.js";

@Injectable()
export class UserRepository implements IUsersRepository {
    private users: UserEntity[] = [];

    async save(user: UserEntity): Promise<void> {
        this.users.push(user)
    }

    async fetch(): Promise<UserEntity[]> {
        return this.users
    }

    async update(id: string, data: Partial<Pick<UserEntity, 'name' | 'email' | 'password'>>): Promise<UserEntity | undefined> {
       const user = this.fetchById(id)

        if (!user) {
            return undefined
        }

        const changes = Object.fromEntries(
            Object.entries(data).filter(([, value]) => value !== undefined),
        );

        Object.assign(user, changes);

        return user;
    }

    async delete(id: string): Promise<UserEntity | undefined> {
        const user = this.fetchById(id)

        if (!user) {
            return undefined
        }

        this.users = this.users.filter((user) => user.id !== id)

        return user;
    }

    async fetchById(id: string): Promise<UserEntity | undefined> {
        const user = this.users.find((user) => user.id == id);

        return user
    }


    async userExistsWithEmail(email: string): Promise<boolean> {
        return this.users.find((user) => user.email == email) !== undefined
    }
}

export abstract class IUsersRepository {
    abstract save(user: UserEntity): Promise<void>;
    abstract fetch(): Promise<UserEntity[]>;
    abstract delete(id: string): Promise<UserEntity | undefined>;
    abstract update(id: string, data: Partial<Pick<UserEntity, 'name' | 'email' | 'password'>>): Promise<UserEntity | undefined>;
    abstract fetchById(id: string): Promise<UserEntity | undefined>;
    abstract userExistsWithEmail(email: string): Promise<boolean>;
}