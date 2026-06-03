import { useState, useEffect } from 'react'
import axios from 'axios'

const ListaDeFilmes = () => {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/filmes')
      .then((resposta) => setFilmes(resposta.data))
      .catch((erro) => console.error(erro))
  }, [])

  return (
    <div>
      <h2>🎬 Filmes</h2>
      <ul>
        {filmes.map((filme) => (
          <li key={filme.id}>{filme.titulo} ({filme.ano})</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaDeFilmes