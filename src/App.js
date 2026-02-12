import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);
  const [animate, setAnimate] = useState(false);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setAnimate(true);
    setNumber(randomNum);

    // reset animation after it runs
    setTimeout(() => setAnimate(false), 600);
  };

  return (
    <div className={`container ${number % 2 === 0 ? "even" : "odd"}`}>
      <h1>Random Number Generator</h1>

      {number === null ? (
        <p className="placeholder">No number generated yet</p>
      ) : (
        <h2 className={animate ? "pop" : ""}>
          {number}
        </h2>
      )}

      {number !== null && (
        <p className="type">
          {number % 2 === 0 ? "Even Number ✅" : "Odd Number 🔹"}
        </p>
      )}

      <button className="glow-btn" onClick={generateRandomNumber}>
        Generate Number
      </button>
    </div>
  );
}

export default App;
