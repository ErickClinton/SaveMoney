import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";

import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const seachFormSchema = z.object({
    query: z.string()
})


type SeachFormInputs = z.infer<typeof seachFormSchema>

export function SearchForm(){

    const { register, handleSubmit, formState:{isSubmitting}} = useForm<SeachFormInputs>({
        resolver: zodResolver(seachFormSchema)

    })


    function handleSeachTransactions(data: SeachFormInputs){
        console.log(data)

    }
    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSeachTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações"
                {...register('query')}
            ></input>
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                buscar
            </button>
        </SearchFormContainer>
    )
}