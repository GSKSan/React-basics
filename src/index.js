import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let callIndex = -1;

const stateVal = [];

const useState = (val) => {
  callIndex++;
  console.log(callIndex);
  const currentIndex = Number(callIndex);
  console.log("f" + currentIndex);

  if (stateVal[currentIndex] === undefined) {
    stateVal[currentIndex] = val;
  }

  const setVal = (newVal) => {
    stateVal[currentIndex] = newVal;
    console.log(stateVal);
    RenderApp();
  };

  return [stateVal[currentIndex], setVal];
};

function Hi() {
  const [val, setVal] = useState(1);

  const [val2, setVal2] = useState(4);
  return (
    <div className="hello">
      A : {val}B : {val2}
      <button onClick={() => setVal(val + 1)}>Set A</button>
      <button onClick={() => setVal2(val2 + 5)}>Set B</button>
    </div>
  );
}

const RenderApp = () => {
  callIndex = -1;
  ReactDOM.render(<Hi />, document.querySelector("#root"));
};

RenderApp();
