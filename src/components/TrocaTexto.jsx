import { useState } from 'react'

const TrocaTexto = () => {

  const [texto, setTexto] = useState('Olá!')

  return (
    <div>
      <h1>{texto}</h1>
      <button onClick={() => setTexto('Tchau!')}>
        Trocar
      </button>
    </div>
  )
}

export default TrocaTexto