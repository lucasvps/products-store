import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { IUsersRepository } from "../user.repository.js";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailUniqueValidator implements ValidatorConstraintInterface {
    constructor(
        private readonly userRepository: IUsersRepository
    ) { }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const isValid = await this.userRepository.userExistsWithEmail(value)

        return !isValid;
    }
}

export const IsEmailUnique = (validationOptions: ValidationOptions) => {
    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [], 
            validator: IsEmailUniqueValidator,
        })
    }
}