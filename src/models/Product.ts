export interface Product {
    id?: string;
    title: string;
    brand: string;
    imageUrl: string;
    newPrice?: number;
    usedPrice?: number;
    link: string;
}