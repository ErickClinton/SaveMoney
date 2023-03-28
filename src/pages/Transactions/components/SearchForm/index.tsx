import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'
const seachFormSchema = z.object({
  query: z.string(),
})

type SeachFormInputs = z.infer<typeof seachFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SeachFormInputs>({
    resolver: zodResolver(seachFormSchema),
  })

  function handleSeachTransactions(data: SeachFormInputs) {
    fetchTransactions(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSeachTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      ></input>
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        buscar
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
