import React from 'react'
import { sum } from './utils/sum'

const App = () => {
  return (
    <div
      style={{
        background: 'blue',
        padding: '20px',
        textAlign: 'center',
      }}>
      <h1>App 2</h1>
      {sum(5, 5)}
    </div>
  )
}

export default App
