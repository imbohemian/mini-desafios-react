const MaiorDeIdade = ({ idade }) => {
  return (
    <>
      <h3>Você tem {idade} anos</h3>
      {idade >= 18
        ? <p>✅ Pode dirigir!</p>
        : <p>❌ Não pode dirigir ainda. Faltam {18 - idade} anos.</p>}
    </>
  )
}

export default MaiorDeIdade