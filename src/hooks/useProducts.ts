import { useEffect, useState } from "react";
import type { Product } from "../models/Product";
import { ProductRepository } from "../repositories/ProductRepository";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(ProductRepository.getAll());
    }, []);

    return products;
}
