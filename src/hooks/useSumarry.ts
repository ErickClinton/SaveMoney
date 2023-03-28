import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionsContext'
import { useMemo } from 'react'
export function useSumary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })
  /* esse acc é o 2 parametro */
  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])
  return summary
}
