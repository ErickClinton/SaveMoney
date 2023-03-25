import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContainer,TransactionsTable,PriceHighLight } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";



export function Transation(){

    const {transactions} = useContext(TransactionContext)
    return(
        <div>
            <Header/>
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction=>{
                            return(
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>{transaction.price}</PriceHighLight>
                                    </td>
                                    <td >{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                        
                        
                        
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}