
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transation } from './pages/Transactions'

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Transation/>
    </ThemeProvider>
  )
}

