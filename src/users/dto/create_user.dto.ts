import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"
import { IsEmailUnique } from "../validator/unique_email.validator.js"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsEmail()
    @IsEmailUnique({message: 'This email is already taken.'})
    email: string
    
    @MinLength(6)
    password: string
}