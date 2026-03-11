import { useState } from 'react'
import './index.css'

export const calculate = (num1, num2, action) => {
  const n1 = Number(num1);
  const n2 = Number(num2);
  switch (action) {
    case 'add': return n1 + n2;
    case 'subtract': return n1 - n2;
    case 'multiply': return n1 * n2;
    case 'divide': return n2 !== 0 ? n1 / n2 : 'Error';
    default: return null;
  }
};

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)

  const appStatus = import.meta.env.VITE_APP_STATUS;

  return (
    <div className="calc-container">
      {/* ВІДОБРАЖЕННЯ СТАТУСУ (DEV/PROD) */}
      <div style={{ 
        fontSize: '12px', 
        padding: '5px', 
        borderRadius: '4px',
        backgroundColor: '#f0f0f0',
        color: appStatus?.includes('Production') ? 'green' : 'orange',
        marginBottom: '15px',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        {appStatus || "Режим не визначено"}
      </div>

      <h2>Калькулятор</h2>
      
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
        <button onClick={() => setResult(calculate(num1, num2, 'add'))}>+</button>
        <button onClick={() => setResult(calculate(num1, num2, 'subtract'))}>-</button>
        <button onClick={() => setResult(calculate(num1, num2, 'multiply'))}>*</button>
        <button onClick={() => setResult(calculate(num1, num2, 'divide'))}>/</button>
      </div>

      {result !== null && (
        <h3 className="result" style={{ marginTop: '20px' }}>
          Результат: {result}
        </h3>
      )}
    </div>
  )
}

export default App