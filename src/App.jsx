import { useState, useEffect } from 'react'
import './index.css'
import posthog from 'posthog-js'

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
  
  // 1. Стан для відображення кнопки очищення через Feature Flag
  const [showClearBtn, setShowClearBtn] = useState(false)

  const appStatus = import.meta.env.VITE_APP_STATUS;

  // 2. Додаємо useEffect для прослуховування прапорців 
  useEffect(() => {
    posthog.onFeatureFlags(() => {
      // Перевіряємо, чи увімкнено прапорець з ключем 'show-urgent-filter' 
      if (posthog.isFeatureEnabled('show-urgent-filter')) {
        setShowClearBtn(true);
      } else {
        setShowClearBtn(false);
      }
    });
  }, []);

  const handleAction = (actionType) => {
    const calcResult = calculate(num1, num2, actionType);
    setResult(calcResult);

    posthog.capture('task_created', { 
      action: actionType,
      status: calcResult === 'Error' ? 'error' : 'success',
      priority: 'high' 
    });
  };

  // Функція для очищення (будемо трекати як негативний сценарій)
  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult(null);
    posthog.capture('task_deleted', { reason: 'manual_reset' });
  };

  return (
    <div className="calc-container">
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
      
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Число 1" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Число 2" />
      
      <div className="buttons">
        <button onClick={() => handleAction('add')}>+</button>
        <button onClick={() => handleAction('subtract')}>-</button>
        <button onClick={() => handleAction('multiply')}>*</button>
        <button onClick={() => handleAction('divide')}>/</button>
      </div>

      {/* 3. Відображення кнопки за умовою прапорця [cite: 838] */}
      {showClearBtn && (
        <button 
          onClick={handleClear} 
          style={{ marginTop: '10px', backgroundColor: '#ff4d4d', color: 'white' }}
        >
          Очистити все
        </button>
      )}

      {result !== null && (
        <h3 className="result" style={{ marginTop: '20px' }}>
          Результат: {result}
        </h3>
      )}
    </div>
  )
}

export default App