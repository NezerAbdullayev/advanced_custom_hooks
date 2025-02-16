import { useState } from "react";
import ChildTest from "./ChildTest";

const ParentTest = () => {
  const [count, setCount] = useState(0);
  console.log("parenttest re-render");

  return (
    <div>
      <div>count== {count}</div>
      <input type="checkbox" onChange={() => setCount(Math.random())} />
      <div>Parent Components</div>
      <ChildTest />
    </div>
  );
};

export default ParentTest;
