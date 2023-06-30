import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MyTransactions = () => {
    const {id} = useParams()
  return (
    <div>MyTransactions : {id}
    
    <Link to={'/home'}>HOLA</Link>
    
    </div>
  )
}

export default MyTransactions