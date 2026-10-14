import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string

    @IsOptional()
    @IsEmail()
    @IsNotEmpty()
    email?: string

    @IsOptional()
    @MinLength(6)
    password?: string
}