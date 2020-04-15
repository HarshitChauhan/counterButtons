import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

import Display from "./Display";
function App() {
  const [counter, setCounter] = useState(0);
  const count = (incrementvalue) => setCounter(counter + incrementvalue);

  return (
    <div>
      <Button onClick={count} incrementvalue={1} />
      <Button onClick={count} incrementvalue={5} />
      <Button onClick={count} incrementvalue={10} />
      <Button onClick={count} incrementvalue={100} />
      <Display msg={counter} />
    </div>
  );
}

export default App;
