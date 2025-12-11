import { Card, Box, Typography } from '@mui/material';
import type { Product } from '../../models/Product';

interface ProductCardProps {
    product: Product | null; // product can be null
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Card
            sx={{
                display: 'flex',
                overflow: 'hidden',
                width: '343px',
                p: 2,
                borderRadius: 4,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
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
                    src={product?.imageUrl}
                    alt="iPhone 11"
                    sx={{
                        width: '120px',
                        height: '120px',
                        objectFit: 'contain',
                    }}
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
                }}
            >
                {/* Brand */}
                <Typography
                    sx={{
                        fontSize: '12px',
                        color: '#696969',
                        fontWeight: 900,
                    }}
                >
                    {product?.brand}
                </Typography>

                {/* Name */}
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#333',
                        mb: 1,
                        textAlign: 'left',
                    }}
                >
                    {product?.title}
                </Typography>

                {/* New Price */}
                <Typography
                    sx={{
                        fontSize: '20px',
                        fontWeight: 800,
                        color: '#BF0000',
                    }}
                >
                    {product?.newPrice}€

                    <Typography
                        component="span"
                        sx={{
                            fontSize: '14px',
                            fontWeight: 600,
                            ml: 0.5,
                        }}
                    >
                        Neuf
                    </Typography>
                </Typography>

                {/* Old Price */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            color: '#333',
                        }}
                    >
                        Occasion dès
                        <Typography
                            component="span"
                            sx={{
                                fontSize: '20px',
                                fontWeight: 700,
                                ml: 0.5,
                            }}
                        >
                            {product?.usedPrice}€
                        </Typography>
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}



