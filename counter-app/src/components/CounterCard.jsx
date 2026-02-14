import React from 'react'
import CounterDisplay from './CounterDisplay'
import CounterButtons from './CounterButtons'
import { useCounter } from '../hooks/useCounter'

const CounterCard = () => {
    const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div className="card">
      <h1>Counter Apps</h1>
      <CounterDisplay count={count} />
      <CounterButtons increment={increment} decrement={decrement} reset={reset} />
    </div>
  )
}

export default CounterCard;