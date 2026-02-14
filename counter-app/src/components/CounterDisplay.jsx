import React from 'react'


const CounterDisplay = ({count}) => {
  return (
    <div className="counter-display">
      <h1>{count}</h1>
    </div>
  )
}

export default CounterDisplay;