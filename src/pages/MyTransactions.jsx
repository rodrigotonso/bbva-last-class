import React from 'react'
import { useParams } from 'react-router-dom'

const MyTransactions = () => {
    const {id} = useParams()
  return (
    <div>MyTransactions : {id}</div>
  )
}

export default MyTransactions