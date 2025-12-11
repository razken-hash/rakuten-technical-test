import { Card, Box, Typography } from '@mui/material';

export default function IPhoneProductCard() {
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
                    src="https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
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
                    Apple
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
                    Apple iPhone 11 128GB Double SIM Noir Sidéral
                </Typography>

                {/* New Price */}
                <Typography
                    sx={{
                        fontSize: '20px',
                        fontWeight: 800,
                        color: '#BF0000',
                    }}
                >
                    754€

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
                            720.99 €
                        </Typography>
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}



