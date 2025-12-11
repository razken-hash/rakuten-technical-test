
export const cardStyle = {
    display: 'flex',
    overflow: 'hidden',
    width: '343px',
    p: 2,
    borderRadius: 4,
    border: '1px solid #DBDBDB',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.4s ease, box-shadow 0.2s ease',
    "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
    },
};

export const productImageStyle = {
    width: '120px',
    height: '120px',
    objectFit: 'contain',
};

export const brandStyle = {
    fontSize: '12px',
    color: 'primary.light',
    fontWeight: 900,
};

export const titleTextStyle = {
    fontSize: '14px',
    fontWeight: 700,
    color: 'primary.dark',
    textAlign: 'left',
};

export const newPriceStyle = {
    fontSize: '20px',
    fontWeight: 800,
    color: 'primary.main',
};

export const usedPriceStyle = {
    fontSize: '20px',
    fontWeight: 700,
    color: 'primary.dark',
};
