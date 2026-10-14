import { Injectable } from "@nestjs/common"
import { Type } from "class-transformer"
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsPositive, MaxLength, Min, ValidateNested } from "class-validator"
import { IsValidUser } from "../../users/validator/user_exists.validator.js"

export class CreateProductDto {
    @IsNotEmpty()
    @IsValidUser({message: 'This user is not valid'})
    userId: string

    @IsNotEmpty()
    name: string

    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    value: number

    @IsNumber()
    @Min(0)
    amountAvailable: number
    
    @IsNotEmpty()
    @MaxLength(1000)
    description: string
    
    @IsNotEmpty()
    category: string
    
    @IsArray()
    @ValidateNested()
    @ArrayMinSize(3)
    @Type(() => CharacteristicsDto)
    characteristics: CharacteristicsDto[]
    
    @IsArray()
    @ValidateNested()
    @ArrayMinSize(1)
    @Type(() => ImageDto)
    images: ImageDto[]
}

export class CharacteristicsDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    description: string
}

export class ImageDto {
    @IsNotEmpty()
    url: string

    @IsNotEmpty()
    description: string
} 

