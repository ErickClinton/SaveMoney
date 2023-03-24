import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";
export function Header(){
    return(
        <div>

            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} alt="" />
                    <Dialog.Root>
                        {/* passo o as child pq ja tenho um botao dentro. por padrao o dialog.trigger vem como um botao, */}
                        <Dialog.Trigger asChild>
                            <NewTransactionButton>Nova transação</NewTransactionButton>
                        </Dialog.Trigger>
                        {/* Permite que criamos um conteudo totalmente fora do contexto da aplciacao. fora do proprio root*/}
                        <NewTransactionModal/>
                    </Dialog.Root>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}