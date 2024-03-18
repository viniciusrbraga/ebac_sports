import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { Produto as ProdType } from '../App'

import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComp = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)

  const produtoEstaNosFavoritos = (produto: ProdType) => {
    const produtoId = produto.id
    const IdDosFavoritos = favoritos.map((f) => f.id)

    return IdDosFavoritos.includes(produtoId)
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComp
