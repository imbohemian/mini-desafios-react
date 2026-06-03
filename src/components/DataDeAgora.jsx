import { useState, useEffect } from 'react'

const DataDeAgora = () => {

  const [data, setData] = useState('')

  useEffect(() => {
    setData(new Date().toLocaleString())
  }, [])

  return (
    <p>Carregado em: {data}</p>
  )
}

export default DataDeAgora