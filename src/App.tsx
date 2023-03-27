import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transation } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* o provider precisa estar por volta dos elementos que precisam ter acesso */}
      <TransactionsProvider>
        <Transation />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
