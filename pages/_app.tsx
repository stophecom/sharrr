import PlausibleProvider from 'next-plausible'
import { extendTheme, ChakraProvider, ThemeConfig } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const config: ThemeConfig = {
  // initialColorMode: 'dark',
  // useSystemColorMode: true,
}

const theme = extendTheme({ colors, config })

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="sharrr.com">
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </PlausibleProvider>
  )
}

export default MyApp
