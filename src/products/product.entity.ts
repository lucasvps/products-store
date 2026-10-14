export class ProductEntity {
    id: string
    name: string
    value: number
    amountAvailable: number
    description: string
    category: string
    characteristics: ProductCharacteristicsEntity[]
    images: ProductImageEntity[]
    createdAt: Date
    updatedAt: Date
}

export class ProductCharacteristicsEntity {
    name: string
    description: string
}

export class ProductImageEntity {
    url: string
    description: string
} 


