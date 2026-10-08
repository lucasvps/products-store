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

export class CharacteristicsDto {
    name: string
    description: string
}

export class ImageDto {
    url: string
    description: string
} 