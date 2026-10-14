import { Module } from "@nestjs/common";
import { UserController } from "./user.controller.js";
import { IUsersRepository, UserRepository } from "./user.repository.js";
import { IsEmailUniqueValidator } from "./validator/unique_email.validator.js";
import { UserExistsValidator } from "./validator/user_exists.validator.js";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [
        {
            provide: IUsersRepository,
            useClass: UserRepository,
        },
        IsEmailUniqueValidator,
        UserExistsValidator
    ],
    exports: [
         {
            provide: IUsersRepository,
            useClass: UserRepository,
        },
    ]
})

export class UsersModule { }