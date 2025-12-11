// src/theme/lightTheme.ts
import { createTheme } from '@mui/material/styles';
// src/theme/lightTheme.ts

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#BF0000',     // red for prices
            light: '#696969',      // greyish for Brand
            dark: '#333333',      // black for normal text
        },
    },
    // typography: {
    //     body1: {
    //         fontSize: '14px',
    //     },
    //     body2: {
    //         fontSize: '12px',
    //     },
    //     subtitle1: {
    //         fontSize: '20px',
    //     },
    // },
});



export default lightTheme;
