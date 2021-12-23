import React from 'react'
import {useSelector} from 'react-redux'
export default function Count() {
  const amount = useSelector(state => state.amount)

    return (
        <p>{amount}</p>
    )
}
