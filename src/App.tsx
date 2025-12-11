import { Box } from '@mui/material'
import './App.css'
import { useProducts } from './hooks/useProducts';
import type { Product } from './models/Product';
import ProductCard from './components/ProductCard/ProductCard';


function App() {

  const products: Product[] = useProducts();

  const productsGridStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
    justifyContent: 'center',
    p: 2.5,
  };

  return (
    <>
      <Box
        sx={productsGridStyle}
      >
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Box>
    </>
  )
}

export default App
