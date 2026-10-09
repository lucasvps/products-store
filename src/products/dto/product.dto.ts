import { Injectable } from "@nestjs/common"
import { Type } from "class-transformer"
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsPositive, MaxLength, Min, ValidateNested } from "class-validator"

export class CreateProductDto {
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

export class ProductDto {
    id: string
    name: string
    value: number
    amountAvailable: number
    description: string
    category: string
    characteristics: CharacteristicsDto[]
    images: ImageDto[]
    createdAt: Date
    updatedAt: Date
}