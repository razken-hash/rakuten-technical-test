import { Box } from '@mui/material'
import './App.css'
import { useProducts } from './hooks/useProducts';
import type { Product } from './models/Product';
import ProductCard from './components/ProductCard/ProductCard';


function App() {

  const products: Product[] = useProducts();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 2, // MUI spacing: 2 * 8px = 16px (or use 2.5 for 20px)
          justifyContent: 'center',
          p: 2.5, // 2.5 * 8px = 20px
        }}
      >
        {products.map((product, index) => (
          <ProductCard product={product} />
        ))}
      </Box>
    </>
  )
}

export default App
