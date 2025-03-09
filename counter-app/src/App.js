import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [step,setStep] = useState(1);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p className={count > 100 ? "green-border" : count < 50 ? "red-border" : "black-border"}
      >
      Count : {count}
      </p>
      <h3>Click on the buttons to increment, decrement, reset, double or half the count</h3>
      <button onClick={() => count + step <= 1000 && setCount(count + step)}>Increment</button>
      <button onClick={() => count - step >=0 && setCount(count - step)}>Decrement</button>
      <button onClick={() => setCount(step)}>Reset</button>
      <button onClick={() => count + step <= 1000 && setCount(count * 2)}>Double</button> 
      <button onClick={() => count - step >=0 && setCount(count / 2)}>Half</button> 
      <h3>Select Increment/Decrement Value:</h3>
      <label>
      <input 
              type="radio"
              value={1}
              checked={step === 1}
              onChange={(e) => setStep(Number(e.target.value))}
            />
              Count 1
      </label>
      <label>
            <input 
              type="radio"
              value={10}
              checked={step === 10}
              onChange={(e) => setStep(Number(e.target.value))}
            />
            Count 10
      </label>
      <label>
            <input 
              type="radio"
              value={100}
              checked={step === 100}
              onChange={(e) => setStep(Number(e.target.value))}
            />
            Count 100
      </label>
    </div>
  );
}

export default App;
