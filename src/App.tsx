import { Box } from '@mui/material'
import './App.css'
import IPhoneProductCard from './components/ProductCard/ProductCard'

function App() {

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
        <IPhoneProductCard />
        <IPhoneProductCard />
        <IPhoneProductCard />
        <IPhoneProductCard />
        <IPhoneProductCard />
        <IPhoneProductCard />
        <IPhoneProductCard />
        <IPhoneProductCard />
        <IPhoneProductCard />
        <IPhoneProductCard />
        <IPhoneProductCard />
      </Box>
    </>
  )
}

export default App
