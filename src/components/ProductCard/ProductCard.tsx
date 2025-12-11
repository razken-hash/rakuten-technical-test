import { Card, Box, Typography } from '@mui/material';
import type { Product } from '../../models/Product';
import { cardStyle, productImageStyle, brandStyle, titleTextStyle, newPriceStyle, usedPriceStyle } from "./ProductCard.styles";

interface ProductCardProps {
    product: Product | null;
}

export default function ProductCard({ product }: ProductCardProps) {
    if (!product) return null;

    const hasNewPrice = product.newPrice != null && product.newPrice > 0;
    const hasUsedPrice = product.usedPrice != null && product.usedPrice > 0;

    if (!hasNewPrice && !hasUsedPrice) return null;

    return (
        <Card
            sx={cardStyle}
            onClick={() => product.link && window.open(product.link, "_blank")}
        >
            {/* Image */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    src={product.imageUrl}
                    alt={product.title}
                    sx={productImageStyle}
                />
            </Box>

            {/* Details */}
            <Box
                sx={{
                    px: 1,
                    py: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-evenly',
                }}
            >
                {/* Brand */}
                <Typography sx={brandStyle}>
                    {product.brand}
                </Typography>

                {/* Name */}
                <Typography sx={{ ...titleTextStyle, mb: 1 }}>
                    {product.title}
                </Typography>

                {/* New Price */}
                {hasNewPrice && (
                    <Typography sx={newPriceStyle}>
                        {product.newPrice}€
                        <Box
                            component="span"
                            sx={{ fontSize: '14px', fontWeight: 600, ml: 0.5 }}
                        >
                            Neuf
                        </Box>
                    </Typography>
                )}

                {/* Used Price */}
                {hasUsedPrice && (
                    <Typography sx={{ fontSize: '14px', color: '#333' }}>
                        Occasion dès
                        <Box
                            component="span"
                            sx={{ ...usedPriceStyle, ml: 0.5 }}
                        >
                            {product.usedPrice}€
                        </Box>
                    </Typography>
                )}
            </Box>
        </Card >
    );
}
