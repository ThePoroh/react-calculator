import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)

  return (
    <div className="calc-container">
      <h2>Калькулятор Б</h2>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Число 1" 
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Число 2" 
      />
      <div className="buttons">
        <button onClick={() => setResult(Number(num1) + Number(num2))}>+</button>
        <button onClick={() => setResult(Number(num1) - Number(num2))}>-</button>
      </div>
      {result !== null && <h3 className="result">Результат: {result}</h3>}
    </div>
  )
}

export default App