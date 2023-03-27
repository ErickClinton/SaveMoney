import { useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionsContext'
export function useSumary() {
  const { transactions } = useContext(TransactionContext)
  /* esse acc é o 2 parametro */
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )
  return summary
}
