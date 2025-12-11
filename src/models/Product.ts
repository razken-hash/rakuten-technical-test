export interface Product {
    id: string | null;
    title: string;
    brand: string;
    imageUrl: string;
    newPrice: number | null;
    usedPrice: number | null;
    link: string;
}