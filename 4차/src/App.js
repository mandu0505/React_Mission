import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const Increase = () => {
    setNumber(number + 1);
  };
  const Decrease = () => {
    setNumber(number - 1);
  };
  const disableButtons = () => {
    setDisabled(!disabled);
  };
  return (
    <div className="App">
      <div data-testid="number">{number}</div>
      <div>
        <button disabled={disabled} onClick={Increase}>+</button>
        <button disabled={disabled} onClick={Decrease}>-</button>
      </div>
      <button
        onClick={disableButtons}
        style={{ backgroundColor: "blue" }}
        data-testid="button"
      >
        on/off
      </button>
    </div>
  );
}

export default App;
