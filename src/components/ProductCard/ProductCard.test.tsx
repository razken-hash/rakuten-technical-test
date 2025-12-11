import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import type { Product } from '../../models/Product';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
    const mockProduct: Product = {
        id: "13532134921",
        brand: "Apple",
        title: "Apple iPhone 17 Pro 256 Go Bleu intense",
        imageUrl: "https://fr.shopping.rakuten.com/pictures/019933e5-992a-7edd-a94e-80d05dfba571_L_NOPAD.jpg",
        newPrice: 1189.99,
        usedPrice: 1450,
        link: "https://fr.shopping.rakuten.com/mfp/shop/13837648/apple-iphone-17-pro?pid=13532134921",
    };

    beforeEach(() => {
        window.open = jest.fn();
    });

    it('renders product details correctly', () => {
        render(<ProductCard product={mockProduct} />);
        expect(screen.getByText(mockProduct.brand)).toBeInTheDocument();
        expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
        expect(screen.getByText('1189.99€')).toBeInTheDocument();
        expect(screen.getByText('1450€')).toBeInTheDocument();
        const img = screen.getByRole('img') as HTMLImageElement;
        expect(img).toHaveAttribute('src', mockProduct.imageUrl);
        expect(img).toHaveAttribute('alt', mockProduct.title);
    });

    it('opens product link on click', () => {
        render(<ProductCard product={mockProduct} />);
        const card = screen.getByTestId('product-card');
        fireEvent.click(card);
        expect(window.open).toHaveBeenCalledWith(mockProduct.link, '_blank');
    });

    it('renders nothing if product is null', () => {
        const { container } = render(<ProductCard product={null} />);
        expect(container.firstChild).toBeNull();
    });

    it('renders only new price if used price is missing', () => {
        const productOnlyNew = { ...mockProduct, usedPrice: 0 };
        render(<ProductCard product={productOnlyNew} />);
        expect(screen.getByText('1189.99€')).toBeInTheDocument();
        expect(screen.queryByText('1450€')).toBeNull();
    });

    it('renders only used price if new price is missing', () => {
        const productOnlyUsed = { ...mockProduct, newPrice: 0 };
        render(<ProductCard product={productOnlyUsed} />);
        expect(screen.queryByText('1189.99€')).toBeNull();
        expect(screen.getByText('1450€')).toBeInTheDocument();
    });
});
