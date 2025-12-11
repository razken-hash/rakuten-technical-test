export interface Product {
    id: string | null;
    title: string;
    brand: string;
    imageUrl: string;
    newPrice: number;
    usedPrice: number | null;
    link: string;
}