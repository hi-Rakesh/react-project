import React from 'react'
import Button from './Button'



const CounterButtons = ({increment ,decrement,reset}) => {
  return (
    <div className='button-group'>
      <Button onClick={increment} variant='primary'>Increment</Button>
      <Button onClick={reset} variant='secondary'>Reset</Button>
      <Button onClick={decrement} variant='danger'>Decrement</Button>
      
    </div>
  )
}

export default CounterButtons;