import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { IUsersRepository } from "../user.repository.js";

@Injectable()
@ValidatorConstraint({async: true})
export class UserExistsValidator implements ValidatorConstraintInterface {
    constructor(
        private readonly userRepository: IUsersRepository
    ) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const user = await this.userRepository.fetchById(value)
        return user !== undefined
    }
}

export const IsValidUser = (validationOptions: ValidationOptions) => {
    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [], 
            validator: UserExistsValidator,
        })
    }
}