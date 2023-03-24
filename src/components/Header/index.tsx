import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo.svg'
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
                        {/* isso serve para o conteudo nao ficar preso a nenhuma div header e etc. ficar sobre eles */}
                        <Dialog.Portal>
                            {/* serve para deiar o fundo meio opaco esse over play. e o content é o conteudo */}
                            <Dialog.Overlay/>
                            <Dialog.Content>

                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}