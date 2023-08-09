import { useState } from "react";


export default function Challenge() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + counter);
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={() => setCounter((prev) => prev - step)}>-</button>
        <input
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
          type="text"
        />

        <button onClick={() => setCounter((prev) => prev + step)}>+</button>
      </div>

      <p>
        <span>
          {counter === 0
            ? " Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>

        {date.toDateString()}
      </p>

      {(counter !== 0 || step !== 1) && (
        <button
          onClick={() => {
            setCounter(1);
            setStep(1);
          }}
        >
          reset
        </button>
      )}
    </div>
  );
}
