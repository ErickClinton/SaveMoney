import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


const  newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
   // type: z.enum(['income','outcome']),
})


type newTransactionsFormInputs = z.infer<typeof newTransactionFormSchema>


export function NewTransactionModal(){
    const {register,handleSubmit,formState:{isSubmitting}} = useForm<newTransactionsFormInputs>({
        resolver:zodResolver(newTransactionFormSchema)
    })
    
    
    function handleCreateNewTransaction(data:newTransactionsFormInputs ){
        console.log(data)
    }
    return(
        <Dialog.Portal>
            {/* serve para deiar o fundo meio opaco esse over play. e o content é o conteudo */}
            <Overlay/>
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X  size={24}/>
                </CloseButton>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input type="text" placeholder="Descrição"required  {...register('description')}/>
                    <input type="number" placeholder="Preço"required {...register('price',{valueAsNumber: true})}/>
                    <input type="text" placeholder="Categoria"required  {...register('category')}/>
                    <TransactionType>
                        <TransactionTypeButton variant='income' value='income'>
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant='outcome' value='outcome'>
                        <ArrowCircleDown size={24}/>
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>
                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>
                
            </Content>
        </Dialog.Portal>
    )
}