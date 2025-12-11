import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import type { Product } from '../../models/Product';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
    const mockProduct: Product = {
        title: 'Test Product',
        brand: 'Test Brand',
        imageUrl: 'https://via.placeholder.com/150',
        link: 'https://example.com',
        newPrice: 100,
        usedPrice: 50,
    };

    beforeEach(() => {
        window.open = jest.fn();
    });

    it('renders product details correctly', () => {
        render(<ProductCard product={mockProduct} />);
        expect(screen.getByText(mockProduct.brand)).toBeInTheDocument();
        expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
        expect(screen.getByText('100€')).toBeInTheDocument();
        expect(screen.getByText('50€')).toBeInTheDocument();
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
        const { container } = render("<ProductCard product={ null} />");
        expect(container.firstChild).toBeNull();
    });

    it('renders only new price if used price is missing', () => {
        const productOnlyNew = { ...mockProduct, usedPrice: 0 };
        render(<ProductCard product={productOnlyNew} />);
        expect(screen.getByText('100€')).toBeInTheDocument();
        expect(screen.queryByText('50€')).toBeNull();
    });

    it('renders only used price if new price is missing', () => {
        const productOnlyUsed = { ...mockProduct, newPrice: 0 };
        render(<ProductCard product={productOnlyUsed} />);
        expect(screen.queryByText('100€')).toBeNull();
        expect(screen.getByText('50€')).toBeInTheDocument();
    });
});
