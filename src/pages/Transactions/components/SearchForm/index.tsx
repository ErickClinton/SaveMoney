import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionsContext'

const seachFormSchema = z.object({
  query: z.string(),
})

type SeachFormInputs = z.infer<typeof seachFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionContext)
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
