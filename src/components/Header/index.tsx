import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderPropps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderPropps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>

      </Content>
    </Container>
  )
}
