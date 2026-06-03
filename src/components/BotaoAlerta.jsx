const BotaoAlerta = () => {

  const handleClick = () => {
    alert('Boa! Você descobriu o onClick! 🎉')
  }

  return (
    <div>
      <button onClick={handleClick}>Me clique!</button>
    </div>
  )
}

export default BotaoAlerta