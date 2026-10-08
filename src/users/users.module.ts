import { Module } from "@nestjs/common";
import { UserController } from "./user.controller.js";
import { IUsersRepository, UserRepository } from "./user.repository.js";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [
        {
            provide: IUsersRepository,
            useClass: UserRepository,
        },
    ],
})

export class UsersModule { }