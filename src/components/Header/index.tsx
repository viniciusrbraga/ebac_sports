import * as S from './styles'

// import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

// type Props = {
//   itensNoCarrinho: Produto[]
//   favoritos: Produto[]
// }

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  const itensfavorito = useSelector(
    (state: RootReducer) => state.favorito.itens
  )

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <span>{itensfavorito.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
