import "./styles.css";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(0);

  const add = () => {
    setList((previousCount) => previousCount + 1);
  };

  return (
    <div className="App">
      <button onClick={add}>Add</button>
      {Array.from({ length: list }).map((_, index) => (
        <button key={index} onClick={add}>
          {index}
        </button>
      ))}
    </div>
  );
}
