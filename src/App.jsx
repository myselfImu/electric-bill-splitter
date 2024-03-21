/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.css";
const howToSteps = [
  "copy the message (only the number part)",
  "paste down below",
  "click convert button",
  "click the check-box to mark done ",
  "click reset to start again",
];

////////////////
export default function App() {
  const [bill, setBill] = useState("");
  console.log(bill);
  const handleBillInput = function (e, value) {
    e.preventDefault();
    setBill(value);
  };
  return (
    <div className="app-container">
      <Instructions />
      <BillInput onBillInput={handleBillInput} />
      <ShowResults bill={bill} />
    </div>
  );
}
function Instructions() {
  return (
    <div className="instruction-container">
      <h3>How to use :</h3>
      <ul className="using-steps">
        {howToSteps.map((step, i) => (
          <ListItems key={i + 1} value={step} i={i + 1} />
        ))}
      </ul>
    </div>
  );
}
function ListItems({ value, i }) {
  return (
    <li>
      <span>{i}.</span>
      {value}
    </li>
  );
}
function BillInput({ onBillInput }) {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <form onSubmit={(e) => onBillInput(e, value)} className="input-container">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <div className="buttons">
        <Button onReset={() => setValue("")} bgColor={"#fa5252"}>
          Reset
        </Button>
        <Button bgColor={"#228be6"}>Convert</Button>
      </div>
    </form>
  );
}
function Button({ children, bgColor, onReset = null }) {
  return (
    <button onClick={() => onReset()} style={{ backgroundColor: bgColor }}>
      {children}
    </button>
  );
}
function ShowResults({ bill }) {
  return (
    <div className="result-container">
      <ul className="results">
        {bill &&
          bill
            .split(",")
            .map((value, i) => <Result key={i} value={value} i={i} />)}
      </ul>
    </div>
  );
}
function Result({ value, i }) {
  const [done, setDone] = useState(false);
  return (
    <li>
      <span>{i + 1})</span>
      <span
        style={{
          backgroundColor: `${i % 2 === 0 ? "#4dabf7" : ""}`,
          textDecoration: `${done ? "line-through" : ""}`,
        }}
      >
        {value}
      </span>
      <span>
        <input
          value={done}
          onClick={() => setDone((done) => (done = !done))}
          type="checkbox"
        />
      </span>
    </li>
  );
}
